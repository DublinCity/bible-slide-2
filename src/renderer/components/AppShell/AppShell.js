import React, { Component } from 'react';
import styles from './AppShell.scss';

export default class AppShell extends Component {
    render() {
        return (
            <div className={styles.AppShell}>
                <h1>AppShell</h1>
            </div>
        );
    }
}
