import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { Switch } from "react-router-dom";

import AuthenticatedRoute from "./AuthenticatedRoute";

import Login from "./Login";
import Register from "./Register";
import Messenger from "./Messenger";

import Apploading from "../components/AppLoading";

import themes from "../themes";
import routes from "../constants/routes";

import { fetchMeRequestAction } from "../store/actions/users";

/**
 * Switch managing routing throughout application.
 */
const AppRoutes = ({ fetchMe, loading, theme }) => {
  /**
   * fetch logged user on reloading page
   */
  useEffect(() => {
    fetchMe("fetch me");
  }, [fetchMe]);

  if (loading) {
    return <Apploading />;
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <Switch>
        <AuthenticatedRoute exact path={routes.LOGIN} component={Login} />
        <AuthenticatedRoute exact path={routes.MESSAGE} component={Messenger} />
        <AuthenticatedRoute exact path={routes.SIGNUP} component={Register} />
        <AuthenticatedRoute exact path={routes.HOME} component={Messenger} />
      </Switch>
    </ThemeProvider>
  );
};

AppRoutes.propTypes = {
  fetchMe: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired
};

const mapStateToProps = state => ({ loading: state.users.loading, theme: state.global.theme });

const mapDispatchToProps = {
  fetchMe: fetchMeRequestAction
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);
