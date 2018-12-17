import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Scripture from './components/Scripture';
import Chapter from './components/Chapter';
import Verse from './components/Verse';
import { findScript, findChapter, fetchVerses } from '../../modules/recommendHisWord';
import { selectScripture } from '../../modules/selectedHisWord';

class Word extends Component {
    static propTypes = {
        scriptures: PropTypes.array.isRequired,
        findScript: PropTypes.func.isRequired,
        findChapter: PropTypes.func.isRequired,
        fetchVerses: PropTypes.func.isRequired,
        selectScripture: PropTypes.func.isRequired,
        beginChapters: PropTypes.array,
        endChapters: PropTypes.array,
        beginVerses: PropTypes.string,
        endVerses: PropTypes.string
    };

    render() {
        const { findScript, findChapter, selectScripture } = this.props;
        const { scriptures, beginChapters, endChapters, beginVerses, endVerses,  fetchVerses } = this.props;
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
                />
                {/* <Verse /> */}
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
        endVerses: state.hisWord.recommendHisWord.endVerses
    };
};

const mapDispatchToProps = {
    findScript,
    findChapter,
    selectScripture,
    fetchVerses
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Word);
