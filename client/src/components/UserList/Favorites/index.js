import React from "react";
import PropTypes from "prop-types";
import Divider from "../Divider";
import UserCard from "../../UserCard";

import { Container } from "./styled";

const Favorites = ({ users, onSelect }) => {
  const clickHandler = username => () => {
    onSelect(username);
  };
  return (
    <Container>
      <Divider label="Favorites" />
      {users.map(user => (
        <UserCard
          key={user.id}
          favorite
          onClick={clickHandler(user.username)}
          userName="Alta Simmons"
          message="You: Perfect, I am really glad to hear from you"
          time="2:32 PM"
        />
      ))}
    </Container>
  );
};
Favorites.propTypes = {
  onSelect: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

export default Favorites;
