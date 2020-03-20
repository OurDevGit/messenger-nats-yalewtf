import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppLayout from "../../components/AppLayout";
import { userSignoutRequestAction } from "../../store/actions/users";

/**
 * will render component with header and side bar, if the user is autherized
 */
const WithLayout = Component => {
  const HocComponnet = ({ logout, ...props }) => {
    return (
      <AppLayout logout={logout}>
        <Component {...props} />
      </AppLayout>
    );
  };

  HocComponnet.propTypes = {
    logout: PropTypes.func.isRequired
  };

  const mapStateToProps = () => ({});

  const mapDispatchToProps = {
    logout: userSignoutRequestAction
  };

  const enhance = connect(mapStateToProps, mapDispatchToProps);

  return enhance(HocComponnet);
};

export default WithLayout;
