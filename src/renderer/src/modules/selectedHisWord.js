import BIBLE_LIST, { KOR_NAME } from '../constants/bibleList';

const SELECT_SCRIPTURE = 'SELECT_SCRIPTURE';
const SELECT_CHAPTER = 'SELECT_CHAPTER';
const SELECT_VERSE = 'SELECT_VERSE';
export const FETCH_HISWORD_REQUEST = 'FETCH_HISWORD_REQUEST';
export const FETCH_HISWORD_SUCCESS = 'FETCH_HISWORD_SUCCESS';
export const ADD_HIS_WORD = 'ADD_HIS_WORD';

const initialState = {
    scripture: '',
    engScripture: '',
    beginChapter: 1,
    endChapter: 1,
    beginVerse: 1,
    endVerse: 1,
    hisWord: [],
    slides: []
};

const selectedHisWord = (state = initialState, action) => {
    const { scripture, chapter, verse, where, engScripture, hisWord } = action;
    switch (action.type) {
        case SELECT_SCRIPTURE:
            return {
                ...state,
                scripture: scripture || state.scripture,
                engScripture
            };
        case SELECT_CHAPTER:
            return {
                ...state,
                [`${where}Chapter`]: chapter || state.chapter
            };
        case SELECT_VERSE:
            return {
                ...state,
                [`${where}Verse`]: verse || state.verse
            };

        case FETCH_HISWORD_SUCCESS:
            return {
                ...state,
                hisWord
            };
        case ADD_HIS_WORD:
            return {
                ...state,
                slides: [
                    ...state.slides,
                    `${state.scripture} ${state.beginChapter}:${state.beginVerse}-${state.endVerse}`
                ]
            };
        default:
            return state;
    }
};

export const selectScripture = (scripture, engScripture) => {
    return {
        type: SELECT_SCRIPTURE,
        scripture,
        engScripture
    };
};

export const selectChapter = (chapter, where) => {
    return {
        type: SELECT_CHAPTER,
        chapter,
        where
    };
};
export const selectVerse = (verse, where) => {
    return {
        type: SELECT_VERSE,
        verse,
        where
    };
};

export const fetchHisWord = () => {
    return {
        type: FETCH_HISWORD_REQUEST
    };
};

export const addHisWord = () => {
    return {
        type: ADD_HIS_WORD
    };
};

export default selectedHisWord;
