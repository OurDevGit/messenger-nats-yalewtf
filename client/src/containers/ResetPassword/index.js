import { connect } from "react-redux";
import { userLoginRequestAction, userSignupRequestAction } from "../../store/actions/users";
import ResetPasswordForm from "../../components/ResetPasswordForm";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  userLogin: userLoginRequestAction,
  userSignup: userSignupRequestAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);
