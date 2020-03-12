import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SearchInput from "./SearchInput";
import Favorites from "./Favorites";
import Chats from "./Chats";
import { Container } from "./styled";

const UserList = ({ fetchUsers, users, selectUser, selectedUser }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Container>
      <SearchInput />
      <Favorites users={[]} onSelect={selectUser} selected={selectedUser} />
      <Chats users={users} onSelect={selectUser} selected={selectedUser} />
    </Container>
  );
};

UserList.propTypes = {
  selectUser: PropTypes.func.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  selectedUser: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired
};

export default UserList;
