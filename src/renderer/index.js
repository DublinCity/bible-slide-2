import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('app');

function render() {
    const AppShell = require('./components/AppShell').default;
    ReactDOM.render(<AppShell />, rootEl);
}

if (module.hot) {
    module.hot.accept('./components/AppShell', render);
}

render();
