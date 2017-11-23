import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import reducer from './reducer';
import history from 'common/history';

/* Create router middleware */
const router = routerMiddleware(history);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(router, thunk),
        typeof window === 'object' &&
        typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )
);

export default store;