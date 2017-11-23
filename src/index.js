import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

/* History */
import history from 'common/history';

/* Store */
import store from 'redux/store';

export const ConnectedApp = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>        
    </Provider>
);

ReactDOM.render(
    ConnectedApp,
    document.getElementById('root')
);

registerServiceWorker();
