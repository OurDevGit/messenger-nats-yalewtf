import { connect } from "react-redux";
import LoginForm from "../../components/LoginForm";

import { userLoginRequestAction, userSignupRequestAction } from "../../store/actions/users";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  userLogin: userLoginRequestAction,
  userSignup: userSignupRequestAction
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
