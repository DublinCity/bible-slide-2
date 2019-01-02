import { delay } from 'redux-saga';
import { all, takeEvery, put, call, select } from 'redux-saga/effects';
import { FETCH_VERSES_REQUEST, FETCH_VERSES_SUCCESS } from '../modules/recommendHisWord';
import { FETCH_HISWORD_REQUEST, FETCH_HISWORD_SUCCESS } from '../modules/selectedHisWord';
import { addSlide, addTitleSlide } from '../pptx/genHisword';

let isFirst = true;
const incrementAsync = function*() {
    yield delay(1000);
};

const saga = function*() {
    yield takeEvery('INCREMENT', incrementAsync);
    console.log('saga run!!!!');
};

const fetchWrapper = url => {
    return fetch(url).then(res => res.text());
};

const parseHtml = rawHtml => {
    const TEXT_NODE = 3;
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(rawHtml, 'text/html');

    const spans = Array.from(htmlDoc.getElementById('tdBible1').querySelectorAll(':scope>span'));
    const visibleTextNodesBundle = spans.map(span => {
        const textNodes = Array.from(span.childNodes);
        const visibleTextNodes = textNodes.filter(item => item.nodeType === TEXT_NODE || item.style.display !== 'none');
        return visibleTextNodes;
    });
    const hisWordArray = visibleTextNodesBundle.map(visibleTextNodes =>
        visibleTextNodes
            .map(node => node.textContent)
            .join('')
            .replace(/[ㄱ-ㅎ]\)|[1-9]\)/, '')
    );
    return hisWordArray;
};

export const fetchVerses = function*(action) {
    const { chapter, where } = action;
    const { engScripture } = yield select(state => {
        return state.hisWord.selectedHisWord;
    });
    const rawHtml = yield call(
        fetchWrapper,
        `https://www.bskorea.or.kr/bible/getsec.ajax.php?&version=GAE&book=${engScripture}&chap=${chapter}`
    );

    yield put({
        type: FETCH_VERSES_SUCCESS,
        where,
        rawHtml
    });
};

export const fetchHisWord = function*() {
    const { engScripture, scripture, beginChapter, endChapter, beginVerse, endVerse } = yield select(state => {
        return state.hisWord.selectedHisWord;
    });
    const rawHtml = yield call(
        fetchWrapper,
        `https://www.bskorea.or.kr/bible/korbibReadpage.php?version=GAE&book=${engScripture}&chap=${beginChapter}`
    );
    const hisWord = parseHtml(rawHtml);
    yield put({
        type: FETCH_HISWORD_SUCCESS,
        hisWord
    });
    if (isFirst) {
        addTitleSlide({ scripture, hisWord, beginChapter, beginVerse, endVerse });
        isFirst = false;
    }
    addSlide({ scripture, hisWord, beginChapter, beginVerse, endVerse });
};

export const watchFetchVerses = function*() {
    yield takeEvery(FETCH_VERSES_REQUEST, fetchVerses);
};

export const watchFetchHisWord = function*() {
    yield takeEvery(FETCH_HISWORD_REQUEST, fetchHisWord);
};

export default function*() {
    yield all([saga(), watchFetchVerses(), watchFetchHisWord()]);
}
