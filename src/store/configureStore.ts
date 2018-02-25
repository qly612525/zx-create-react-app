import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers';
import initState from './initState';

const middlewares = [thunk];
const composeEnhancers = process.env.NODE_ENV !== 'production' ? composeWithDevTools({}) : compose;

export default function (history: History) {
    const routingMiddleware = routerMiddleware(history);
    const store = createStore(
        reducers,
        initState,
        composeEnhancers(applyMiddleware(...middlewares, routingMiddleware)),
    );
    return store;
}