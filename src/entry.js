import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import React from 'react';
import { App, FirstPage, SecondPage } from './components';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import * as actions from './actions';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(actions.loadList());

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={FirstPage} />
        <Route path="second-page" component={SecondPage} />
      </Route>
    </Router>
  </Provider>
), document.querySelector('.main'));
