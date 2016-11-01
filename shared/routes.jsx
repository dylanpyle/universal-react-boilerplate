import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from './components/app-container';
import CountryListPage from './pages/country-list';
import CountryPage from './pages/country';

export default (
  <Route component={AppContainer} path='/'>
    <IndexRoute component={CountryListPage} />
    <Route component={CountryPage} path='countries/:countryCode' />
  </Route>
);
