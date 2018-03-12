import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';
import Login from './components/auth/signin';
import reducers from './reducers';
import { toHome, toLogin } from './routePaths';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router>
        <Switch>
          <Route exact path={toHome} component={App} />
          <Route path={toLogin} component={Login} />
        </Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>
  , document.getElementById('root'));
