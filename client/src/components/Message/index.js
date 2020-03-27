import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import wsNats from "websocket-nats";

import { MessageBoard, TypingIndicator } from "./styled";
import MessageCreate from "./MessageCreate";
import MessageList from "./MessageList";

const currentSecond = () => {
  return new Date().getTime() / 1000;
};

const MessageComponent = ({ selectedUser, currentUser, messages, createMessage, newMessage }) => {
  const nats = useRef(wsNats.connect(`ws://${process.env.REACT_APP_NATS_HOST}`));

  const [typer, setTypers] = useState("");
  const [publishedTyping, updateTyping] = useState(false);
  const [lastTyped, setLastTyped] = useState(currentSecond());

  const { username, last_name, first_name } = currentUser;
  const typingMsg = { subscriber: selectedUser, name: `${first_name} ${last_name}` };

  const typingStopped = () => {
    if (currentSecond() - lastTyped > 2) {
      nats.current.publish("user.typing", JSON.stringify({ ...typingMsg, type: "stop" }));
      updateTyping(false);
      setLastTyped(currentSecond());
    } else {
      setTimeout(typingStopped, 300);
    }
  };

  const userTyping = () => {
    if (!publishedTyping) {
      nats.current.publish("user.typing", JSON.stringify({ ...typingMsg, type: "on" }));
      updateTyping(true);
      setTimeout(typingStopped, 300);
    }
  };

  const renderTypers = () => {
    if (typer) {
      return `${typer} is typing...`;
    }
    return null;
  };

  const handleSubmit = message => {
    if (!message && !selectedUser) {
      return;
    }

    createMessage({
      publisher: username,
      subscriber: selectedUser,
      message: message
    });
  };

  useEffect(() => {
    if (nats.current) {
      nats.current.subscribe(`messages.${username}`, msg => {
        const newMsg = JSON.parse(msg);
        newMessage({ newMsg, sub: newMsg.publisher });
      });
      nats.current.subscribe(`messages.${username}.typing`, msg => {
        const newMsg = JSON.parse(msg);
        if (newMsg.type === "stop") {
          setTypers("");
        } else if (newMsg.type === "on") {
          setTypers(newMsg.user);
        }
      });
    }
  }, [nats, newMessage, username]);

  return (
    <MessageBoard>
      <MessageList messages={messages} currentUser={username} user={currentUser} />
      <MessageCreate onSubmit={handleSubmit} onTyping={userTyping} disable={!selectedUser} />
      <TypingIndicator>{renderTypers()}</TypingIndicator>
    </MessageBoard>
  );
};

MessageComponent.propTypes = {
  selectedUser: PropTypes.string,
  newMessage: PropTypes.func.isRequired,
  createMessage: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired
};

MessageComponent.defaultProps = {
  selectedUser: ""
};

export default MessageComponent;
