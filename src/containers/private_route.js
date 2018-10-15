import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from "react-router-dom";
import { isLogin } from '../helper/user/helper';

const PrivateRoute = ({ component: Component, ...rest }) => (  
    <Route {...rest} render={props => (
        isLogin() ? (<Component {...props} />) 
            : 
            (<Redirect to={{pathname: '/login', state: { from: props.location }}}/>)
    )} />
  );

export default PrivateRoute;