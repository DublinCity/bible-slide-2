import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Scripture from './components/Scripture';
import Chapter from './components/Chapter';
import Verse from './components/Verse';
import { findScript, findChapter, fetchVerses } from '../../modules/recommendHisWord';
import { selectScripture, selectChapter, selectVerse, fetchHisWord } from '../../modules/selectedHisWord';
import { saveSlide, addSlide } from '../../pptx/genHisword';

class Word extends Component {
    static propTypes = {
        scriptures: PropTypes.array.isRequired,
        findScript: PropTypes.func.isRequired,
        findChapter: PropTypes.func.isRequired,
        fetchVerses: PropTypes.func.isRequired,
        selectScripture: PropTypes.func.isRequired,
        selectChapter: PropTypes.func.isRequired,
        selectVerse: PropTypes.func.isRequired,
        fetchHisWord: PropTypes.func.isRequired,
        saveSlide: PropTypes.func.isRequired,
        beginChapters: PropTypes.array,
        endChapters: PropTypes.array,
        beginVerses: PropTypes.string,
        endVerses: PropTypes.string
    };

    render() {
        const {
            findScript,
            findChapter,
            selectScripture,
            selectChapter,
            selectVerse,
            fetchHisWord,
            saveSlide
        } = this.props;
        const { scriptures, beginChapters, endChapters, beginVerses, endVerses, fetchVerses } = this.props;
        return (
            <div>
                <Scripture
                    scriptures={scriptures}
                    onInputChange={findScript}
                    fetchChapter={findChapter}
                    onSelect={selectScripture}
                />
                <Chapter
                    beginChapters={beginChapters}
                    endChapters={endChapters}
                    beginVerses={beginVerses}
                    endVerses={endVerses}
                    fetchVerses={fetchVerses}
                    onClickChapter={selectChapter}
                    onClickVerse={selectVerse}
                />
                {/* <Verse /> */}
                <button onClick={fetchHisWord}>말씀 가져오기</button>
                <button onClick={saveSlide}>SAVE</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        scriptures: state.hisWord.recommendHisWord.scriptures,
        beginChapters: state.hisWord.recommendHisWord.beginChapters,
        endChapters: state.hisWord.recommendHisWord.endChapters,
        beginVerses: state.hisWord.recommendHisWord.beginVerses,
        endVerses: state.hisWord.recommendHisWord.endVerses,
        saveSlide: saveSlide(state.hisWord.selectedHisWord)
    };
};

const mapDispatchToProps = {
    findScript,
    findChapter,
    selectScripture,
    fetchVerses,
    selectChapter,
    selectVerse,
    fetchHisWord
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Word);
