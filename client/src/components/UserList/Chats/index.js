import React from "react";
import PropTypes from "prop-types";
import Divider from "../Divider";
import UserCard from "../../UserCard";
import { Container } from "./styled";

const Chats = ({ users, selected, onSelect }) => {
  const clickHandler = username => () => {
    onSelect(username);
  };
  return (
    <Container>
      <Divider label="Chats" />
      {users.map(user => (
        <UserCard
          key={user.id}
          onClick={clickHandler(user.username)}
          userAvatarLetter = {user.last_name ? `${user.first_name[0]}${user.last_name[0]}` : user.first_name[0]}
          userName={`${user.first_name} ${user.last_name}`}
          className={selected === user.username ? "active" : ""}
          message={user.username === 'rea' ? "Hi, I'm Rea. Let me know how I can help." :"You: I’m not sure, but let me find best solution for our problem"}
          time="12:50 AM"
          // badgeText={0}
          // isOnline
        />
      ))}
    </Container>
  );
};

Chats.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired
};

export default Chats;
