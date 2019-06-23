import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import {save, load} from 'redux-localstorage-simple';
import HttpsRedirect from 'react-https-redirect';

import './index.css';
import reducers from './reducers';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(promise, thunk, save({states: ['user']}))(createStore);
const store = createStoreWithMiddleware(
    reducers,
    load({states: ['user']}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <HttpsRedirect>
        <Provider store={store}>
            <App />
        </Provider>
    </HttpsRedirect>,
    document.getElementById('root')
);