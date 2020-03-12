import { connect } from "react-redux";
import MessageComponent from "../../components/Message";
import { createMessageRequestAction, newMessageArrivedAction } from "../../store/actions/messages";
import { getMessagesSelector } from "../../store/selectors/messages";

const mapStateToProps = state => {
  return {
    global: state.global,
    currentUser: state.users.currentUser,
    selectedUser: state.users.selected,
    messages: getMessagesSelector(state)
  };
};

const mapDispatchToProps = {
  createMessage: createMessageRequestAction,
  newMessage: newMessageArrivedAction
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(MessageComponent);
