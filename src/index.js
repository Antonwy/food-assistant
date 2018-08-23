import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { BrowserRouter as Router } from 'react-router-dom';
// import { form } from './Redux/reducers'

// //const logger = createLogger();
// const rootReducer = combineReducers({
//     form
// })
// const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
            <Router basename={process.env.PUBLIC_URL}>
                <App />
            </Router>,
        document.getElementById('root'));


registerServiceWorker();
