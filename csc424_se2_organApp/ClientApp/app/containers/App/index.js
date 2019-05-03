/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Helmet } from "react-helmet";
import { Switch, Route,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import HomePage from 'containers/HomePage/Loadable';
import SearchBox from 'containers/SearchBox/Loadable';
import SignUpPage from "containers/SignUpPage/Loadable";
import CanForm from "containers/CanForm/Loadable";
import DonDecForm from "containers/DonDecForm/Loadable";
import DonLivForm from "containers/DonLivForm/Loadable";
import TxLiForm from "containers/TxLiForm/Loadable";
import TxfLiForm from "containers/TxfLiForm/Loadable";
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import RegForm from 'containers/RegForm/Loadable';
import ClientHome from 'containers/ClientHome/Loadable';
import {createStructuredSelector} from 'reselect';
import makeSelectAuth from '../../authSelector';
import LoginPage from 'containers/LoginPage/Loadable';
import SpecialNav from "../../components/SpecialNav";
import PrivateRoute from "./PrivateRoute"




function App(props) {
  const {isAuthenticated} = props.auth;
  const {role}=props.auth.user;
  return (<div>
      <Helmet>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
      </Helmet>
      <SpecialNav success={isAuthenticated} role ={role} dispatch = {props.dispatch}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/client/home" component={ClientHome}/>
        <PrivateRoute path="/client/information" component={RegForm} />
        <PrivateRoute path="/staff/searchbox" component={SearchBox} />
        <PrivateRoute path="/staff/canform" component={CanForm} />
        <PrivateRoute path="/staff/dondecform" component={DonDecForm} />
        <PrivateRoute path="/staff/donlivform" component={DonLivForm} />
        <PrivateRoute path="/staff/txliform" component={TxLiForm} />
        <PrivateRoute path="/staff/txfliform" component={TxfLiForm} />
        <Route component={NotFoundPage} />
      </Switch>
  </div>);
}

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth()
});

export default withRouter(connect(mapStateToProps)(App));
