import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { BrowserRouter as Router } from 'react-router-dom';
import { userData } from './Redux/reducers'

//const logger = createLogger();
const rootReducer = combineReducers({
    user: userData
})
const store = createStore(rootReducer);

ReactDOM.render(
            <Provider store={store}>
                <Router basename={process.env.PUBLIC_URL}>
                    <App />
                </Router>
            </Provider>,
        document.getElementById('root'));


registerServiceWorker();