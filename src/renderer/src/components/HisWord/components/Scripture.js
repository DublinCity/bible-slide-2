import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { KOR_NAME, ENG_NAME } from '../../../constants/bibleList';
import styles from './Scripture.scss';

const Scripture = ({ scriptures, onInputChange, onSelect, fetchChapter, fetchVerses }) => {
    let inputNode;
    return (
        <Fragment>
            <div className={styles.wrapper}>
                <input
                    className={styles.input}
                    ref={node => (inputNode = node)}
                    placeholder="마태복음"
                    onChange={e => {
                        if (!e.target.value) return;
                        onInputChange(e.target.value);
                    }}
                />
                {scriptures.map(item => (
                    <div
                        key={item[ENG_NAME]}
                        onClick={() => {
                            onSelect(item[KOR_NAME], item[ENG_NAME]);
                            fetchChapter(item[KOR_NAME]);
                            fetchVerses(1, 'begin');
                            fetchVerses(1, 'end');
                            inputNode.value = item[KOR_NAME];
                        }}
                    >
                        {item[KOR_NAME]}
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

Scripture.propTypes = {
    scriptures: PropTypes.array,
    onInputChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    fetchChapter: PropTypes.func.isRequired,
    fetchVerses: PropTypes.func.isRequired
};

export default Scripture;
