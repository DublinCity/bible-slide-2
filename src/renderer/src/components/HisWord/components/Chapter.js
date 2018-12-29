import React, { Component, Fragment } from 'react';
import Proptypes from 'prop-types';
import reactHtmlParser from 'react-html-parser';

const getSelectValue = e => {
    return e.target.options[e.target.selectedIndex].value;
};

class Chapter extends Component {
    render() {
        const {
            beginChapters,
            endChapters,
            beginVerses,
            endVerses,
            fetchVerses,
            onClickChapter,
            onClickVerse
        } = this.props;

        return (
            <Fragment>
                <select
                    name="startChapter"
                    onChange={e => {
                        const selectValue = getSelectValue(e);
                        const where = 'begin';
                        fetchVerses(selectValue, where);
                        onClickChapter(selectValue, where);
                    }}
                >
                    {beginChapters.map(chapter => (
                        <option key={chapter} value={chapter}>
                            {chapter}
                        </option>
                    ))}
                </select>
                장
                <select
                    name="startVerse"
                    onChange={e => {
                        const selectValue = getSelectValue(e);
                        const where = 'begin';
                        console.log(selectValue, where);
                        onClickVerse(selectValue, where);
                    }}
                >
                    {reactHtmlParser(beginVerses)}
                </select>
                절 ~
                <select
                    name="endChapter"
                    onChange={e => {
                        const selectValue = getSelectValue(e);
                        const where = 'end';
                        fetchVerses(selectValue, where);
                        onClickChapter(selectValue, where);
                    }}
                >
                    {endChapters.map(chapter => (
                        <option key={chapter} value={chapter}>
                            {chapter}
                        </option>
                    ))}
                </select>
                장
                <select
                    name="endVerse"
                    onChange={e => {
                        const selectValue = getSelectValue(e);
                        const where = 'end';
                        onClickVerse(selectValue, where);
                    }}
                >
                    {reactHtmlParser(endVerses)}
                </select>
                절
            </Fragment>
        );
    }
}

Chapter.propTypes = {
    fetchVerses: Proptypes.func,
    onClickChapter: Proptypes.func,
    onClickVerse: Proptypes.func,
    beginChapters: Proptypes.array,
    endChapters: Proptypes.array,
    verses: Proptypes.array,
    beginVerses: Proptypes.string,
    endVerses: Proptypes.string
};

export default Chapter;
