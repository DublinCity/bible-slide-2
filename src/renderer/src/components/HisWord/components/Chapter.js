import React, { Component, Fragment } from 'react';
import Proptypes from 'prop-types';

class Chapter extends Component {
    render() {
        const { beginChapters, endChapters, beginVerses, endVerses, fetchVerses } = this.props;
        // const createMarkup = (html) => {
        // return <div dangerouslySetInnerHTML={html} />
        // };
        const getSelectValue = e => {
            return e.target.options[e.target.selectedIndex].value;
        };
        return (
            <Fragment>
                <select
                    name="startChapter"
                    onChange={e => {
                        console.log(getSelectValue(e));
                        fetchVerses(getSelectValue(e), 'begin');
                    }}
                >
                    {beginChapters.map(chapter => (
                        <option key={chapter} value={chapter}>
                            {chapter}
                        </option>
                    ))}
                </select>
                {/* <select name="startVerse">{createMarkup(beginVerses)}</select> */}
                <select name="endChapter" onChange={e => fetchVerses(getSelectValue(e), 'end')}>
                    {endChapters.map(chapter => (
                        <option key={chapter} value={chapter}>
                            {chapter}
                        </option>
                    ))}
                </select>
                {/* <select name="endVerse">{createMarkup(endVerses)}</select> */}
            </Fragment>
        );
    }
}

Chapter.propTypes = {
    fetchVerses: Proptypes.func,
    beginChapters: Proptypes.array,
    endChapters: Proptypes.array,
    verses: Proptypes.array,
    beginVerses: Proptypes.string,
    endVerses: Proptypes.string
};

export default Chapter;
