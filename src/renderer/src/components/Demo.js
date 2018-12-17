import React, { Component } from 'react';
import styles from './Demo.scss';
import cx from 'classnames';

class Demo extends Component {
    render() {
        return (
            <div className={cx('Demo', styles.Demo)}>
                <h2>Demo component</h2>
                <p>This is a demo component.</p>
            </div>
        );
    }
}

export default Demo;
