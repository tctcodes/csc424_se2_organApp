/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import SignUpPage from 'containers/SignUpPage/Loadable';
import SearchBox from 'containers/SearchBox/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import LoginPage from 'containers/LoginPage/Loadable';

export default function App() {
  return <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/searchbox" component={SearchBox} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>;
}
