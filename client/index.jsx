import 'babel-polyfill';

import React from 'react';
import AsyncProps from 'async-props';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from '../shared/routes';

function renderAsync(props) {
  return (
    <AsyncProps {...props} />
  );
}

render(
  <Router
    history={browserHistory}
    routes={routes}
    render={renderAsync}
  />,
  document.querySelector('.app-root')
);
