import { connect } from "react-redux";
import UserList from "../../components/UserList";
import { fetchUsersRequestAction, selectUserAction } from "../../store/actions/users";

const mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser,
    selectedUser: state.users.selected,
    users: state.users.entities
  };
};

const mapDispatchToProps = {
  fetchUsers: fetchUsersRequestAction,
  selectUser: selectUserAction
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(UserList);
