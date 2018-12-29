import BIBLE_LIST, { KOR_NAME } from '../constants/bibleList';

export const FIND_SCRIPT = 'FIND_SCRIPT';
export const FIND_CHAPTER = 'FIND_CHAPTER';
export const FETCH_VERSES_REQUEST = 'FETCH_VERSES_REQUEST';
export const FETCH_VERSES_SUCCESS = 'FETCH_VERSES_SUCCESS';

const initialState = {
    scriptures: [],
    beginChapters: [],
    endChapters: [],
    beginVerses: '',
    endVerses: ''
};

const recommendHisWord = (state = initialState, action) => {
    const { keyword, selectedScripture, where, rawHtml } = action;
    switch (action.type) {
        case FIND_SCRIPT:
            return {
                ...state,
                scriptures: BIBLE_LIST.filter(scripture => scripture[KOR_NAME].includes(keyword))
            };
        case FIND_CHAPTER:
            return {
                ...state,
                beginChapters: BIBLE_LIST.find(scripture => scripture[KOR_NAME] === selectedScripture).slice(2),
                endChapters: BIBLE_LIST.find(scripture => scripture[KOR_NAME] === selectedScripture).slice(2)
            };
        case FETCH_VERSES_SUCCESS:
            return {
                ...state,
                [`${where}Verses`]: rawHtml
            };
        default:
            return state;
    }
};

export const findChapter = selectedScripture => {
    return {
        type: FIND_CHAPTER,
        selectedScripture
    };
};

export const findScript = keyword => {
    return {
        type: FIND_SCRIPT,
        keyword
    };
};

export const fetchVerses = (chapter, where) => {
    console.log(chapter, where);
    return {
        type: FETCH_VERSES_REQUEST,
        chapter,
        where
    };
};

export default recommendHisWord;
