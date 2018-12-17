import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './src';

const rootEl = document.getElementById('app');

function render() {
    ReactDOM.render(<App />, rootEl);
}

if (module.hot) {
    module.hot.accept('./src', render);
}

render();
