import { connect } from "react-redux";
import RegisterForm from "../../components/RegisterForm";

import { userSignupRequestAction } from "../../store/actions/users";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  userSignup: userSignupRequestAction
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
