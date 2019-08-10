import React from 'react';
import ReactDOM from 'react-dom';
// import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Map } from 'immutable'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import Nav from 'components/common/Navbar'

import App from './App'
import SignUp from './components/auth/SignUp'
import rootReducer from './reducers'
import {
  toHome,
  // toLogin,
  toSignUp
} from './routePaths'

const sagaMiddleware = createSagaMiddleware()
const initialState = Map({})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const createStoreWithMiddleware = applyMiddleware(logger, sagaMiddleware)

const enhancer = composeEnhancers(createStoreWithMiddleware)
const store = createStore(rootReducer, initialState, enhancer)

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <div className="app">
          <Nav />
          <Switch>
            <Route exact path={toHome} component={App} />
            <Route path={toSignUp} component={SignUp} />
          </Switch>
        </div>
      </Router>
    </Provider>
  </MuiThemeProvider>
  , document.getElementById('root'));
