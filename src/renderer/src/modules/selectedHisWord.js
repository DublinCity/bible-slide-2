import BIBLE_LIST, { KOR_NAME } from '../constants/bibleList';

const SELECT_SCRIPTURE = 'SELECT_SCRIPTURE';
const SELECT_CHAPTER = 'SELECT_CHAPTER';
const SELECT_VERSE = 'SELECT_VERSE';

const initialState = {
    scripture: '',
    chapter: 1,
    verse: 1
};

const selectedHisWord = (state = initialState, action) => {
    const { scripture, chapter, verse } = action;
    switch (action.type) {
        case SELECT_SCRIPTURE:
        case SELECT_CHAPTER:
        case SELECT_VERSE:
            return {
                ...state,
                scripture: scripture || state.scripture,
                chapter: chapter || state.chapter,
                verse: verse || state.verse
            };
        default:
            return state;
    }
};

export const selectScripture = scripture => {
    return {
        type: SELECT_SCRIPTURE,
        scripture
    };
};

export const selectChapter = chapter => {
    return {
        type: SELECT_CHAPTER,
        chapter
    };
};
export const selectVerse = verse => {
    return {
        type: SELECT_VERSE,
        verse
    };
};

export default selectedHisWord;
