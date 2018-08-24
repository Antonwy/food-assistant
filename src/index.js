import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { BrowserRouter as Router } from 'react-router-dom';
import { userData, colorManager } from './Redux/reducers'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import { reducer as formReducer } from 'redux-form';

const logger = createLogger();
const rootReducer = combineReducers({
    user: userData,
    colors: colorManager,
    form: formReducer
})
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
            <Provider store={store}>
                <Router basename={process.env.PUBLIC_URL}>
                    <App />
                </Router>
            </Provider>,
        document.getElementById('root'));


registerServiceWorker();
