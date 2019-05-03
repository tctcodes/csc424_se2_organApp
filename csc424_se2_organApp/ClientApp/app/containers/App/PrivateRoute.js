import React from 'react';
import {Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import makeSelectAuth from "../../authSelector";






const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      const { path } = rest;
      const { isAuthenticated } = auth;
      const { role } = auth.user;
      if (path.includes(`${role}`))
        return (
          isAuthenticated
            ? <Component {...props} />
            : <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }} />
        )
      else {
  
        return(
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}/>);

      }
    }
    } />
  )
}
const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth()
});

 export default connect(mapStateToProps)(PrivateRoute);

