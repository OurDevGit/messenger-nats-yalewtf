import { connect } from "react-redux";
import ChatHeader from "../../components/ChatHeader";

const mapStateToProps = state => {
  return {
    user: state.users.currentUser
  };
};

const mapDispatchToProps = {};

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(ChatHeader);
