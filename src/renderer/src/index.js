import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';

import Container from './components';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
}
