import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './settings';
import { App } from './main';

import { registerMechanismConfiguration } from './settings';
registerMechanismConfiguration();

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('register-app')
);
