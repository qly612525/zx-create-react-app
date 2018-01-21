import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import configureStore from '../store/configureStore';
import Home from './home';

const history = createBrowserHistory();
const store = configureStore(history);

class Root extends React.Component<{}, {}> {
    render() {
        return (
            <Provider store={store}>      
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                    </Switch>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default Root;