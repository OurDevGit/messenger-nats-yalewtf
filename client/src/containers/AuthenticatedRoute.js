import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import WithLayout from "./Layout";
import routes from "../constants/routes";
import { storeToken } from "../utils/tokenStore";

import { changeThemeAction } from "../store/actions/global";
/**
 * if the user is not logged
 *    - can not navigate to message or other pages
 *    - will navigate login page or signup page
 *
 * if the use is logged and stored token to local
 *    - will naviate to meesage or other pages
 *    - can not naviate to login and signup
 */

const AuthenticatedRoute = ({ path, isAuthorized, token, component,location, ...rest }) => {
  console.log(location.hash)
  if(location.hash !== "" && location.pathname === "/")
  {
    var paramtoken ={ 
      "accesstoken": location.hash.split("&")[1].split('=')[1],
      "refreshtoken": location.hash.split("&")[0].split('=')[1]
    }
    storeToken(paramtoken)
  }
  if (isAuthorized && token && token.accesstoken) {
    if (path === routes.LOGIN || path === routes.SIGNUP) {
      return <Redirect to={routes.MESSAGE} />;
    }
    return <Route {...rest} path={path} component={WithLayout(component)} />;
  }
  if (path === routes.LOGIN || path === routes.SIGNUP || path === routes.CONFIRM || path === routes.RESETPASSWORD) {
    return <Route {...rest} path={path} component={component} />;
  }
  return <Redirect to={routes.LOGIN} />;
};

AuthenticatedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool,
  token: PropTypes.object,
  component: PropTypes.any.isRequired
};

AuthenticatedRoute.defaultProps = {
  isAuthorized: false,
  token: null
};

const mapStateToProps = state => ({
  isAuthorized: state.users.isAuthorized,
  token: state.users.token
});

const mapDispatchToProps = {
  changeTheme: changeThemeAction
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedRoute);
