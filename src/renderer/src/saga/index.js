import { delay } from 'redux-saga';
import axios from 'axios';
import { all, takeEvery, put, call, select } from 'redux-saga/effects';
import { FETCH_VERSES_REQUEST, FETCH_VERSES_SUCCESS } from '../modules/recommendHisWord';

const incrementAsync = function*() {
    yield delay(1000);
};

const saga = function*() {
    yield takeEvery('INCREMENT', incrementAsync);
    console.log('saga run!!!!');
};

export const fetchVerses = function*(action) {
    const { chapter, where } = action;
    const getScripture = state => state.hisWord.selectedHisWord.scripture;
    const scripture = yield select(getScripture);
    const rangeHtml = yield call(
        axios.get,
        `https://www.bskorea.or.kr/bible/getsec.ajax.php?&version=GAE&book=gen&chap=${chapter}`
    );

    yield put({
        type: FETCH_VERSES_SUCCESS,
        where,
        rangeHtml
    });
};

export const watchFetchVerses = function*() {
    yield takeEvery(FETCH_VERSES_REQUEST, fetchVerses);
};

export default function*() {
    yield all([saga(), watchFetchVerses()]);
}
