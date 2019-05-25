import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import path from 'path';
import cx from 'classnames';

import styles from './HisWord.scss';
import Scripture from './components/Scripture';
import Chapter from './components/Chapter';
import { findScript, findChapter, fetchVerses } from '../../modules/recommendHisWord';
import { selectScripture, selectChapter, selectVerse, fetchHisWord, addHisWord } from '../../modules/selectedHisWord';
import { saveSlide } from '../../pptx/genHisword';

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
        addHisWord: PropTypes.func.isRequired,
        beginChapters: PropTypes.array,
        endChapters: PropTypes.array,
        beginVerses: PropTypes.string,
        endVerses: PropTypes.string,
        slides: PropTypes.arrayOf(PropTypes.string)
    };

    render() {
        const {
            findScript,
            findChapter,
            selectScripture,
            selectChapter,
            selectVerse,
            fetchHisWord,
            addHisWord,
            slides
        } = this.props;
        const { scriptures, beginChapters, endChapters, beginVerses, endVerses, fetchVerses } = this.props;
        return (
            <div className={cx(styles.Wrapper)}>
                <Scripture
                    scriptures={scriptures}
                    onInputChange={findScript}
                    fetchChapter={findChapter}
                    fetchVerses={fetchVerses}
                    onSelect={selectScripture}
                />
                <div>
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

                    <div>
                        {slides.map(item => (
                            <span>{item} </span>
                        ))}
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button
                        onClick={e => {
                            fetchHisWord();
                            addHisWord();
                        }}
                    >
                        말씀 가져오기
                    </button>
                    <button onClick={saveSlide}>슬라이드 만들기</button>
                </div>
                <button onClick={() => alert(path.resolve(__static, 'img/titleBkgd.png'))}>경로</button>
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
        slides: state.hisWord.selectedHisWord.slides
    };
};

const mapDispatchToProps = {
    findScript,
    findChapter,
    selectScripture,
    fetchVerses,
    selectChapter,
    selectVerse,
    fetchHisWord,
    addHisWord
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Word);
