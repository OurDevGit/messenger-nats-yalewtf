import { connect } from "react-redux";
import ConfirmForm from "../../components/ConfirmForm";

import { userLoginRequestAction, userSignupRequestAction } from "../../store/actions/users";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  userLogin: userLoginRequestAction,
  userSignup: userSignupRequestAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmForm);
