import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import UserCard from "../../UserCard";
import { Container, BubbleContent } from "./styled";
import ReplyIcon from "../../../assets/icons/reply";

const Message = ({ message, isMe, createdAt }) => {
  const [showReply, toggelReply] = useState(false);

  const userCardStyle = {
    padding: 0,
    marginLeft: isMe ? 16 : 0,
    marginRight: isMe ? 0 : 16
  };

  const createdTime = moment(createdAt).format("HH:mmA");

  const handleMouseEnterLeave = () => toggelReply(!showReply);

  return (
    <BubbleContent
      className={isMe ? "me" : "other"}
      onMouseEnter={handleMouseEnterLeave}
      onMouseLeave={handleMouseEnterLeave}
    >
      <div className="user-avatar">
        <UserCard isOnline style={userCardStyle} />
      </div>
      <div className="message">
        {message}
        <span className="created-time">{createdTime}</span>
      </div>
      {!isMe && showReply && (
        <div className="reply-message">
          <ReplyIcon />
        </div>
      )}
    </BubbleContent>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  isMe: PropTypes.bool.isRequired
};

const MessageList = ({ messages, currentUser }) => {
  const bottomDiv = useRef();
  const contRef = useRef();

  useEffect(() => {
    if (bottomDiv.current) {
      bottomDiv.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <Container ref={contRef}>
      {messages.map(({ id, message, publisher, createdAt }) => {
        const isMe = publisher === currentUser;
        return <Message key={id} message={message} isMe={isMe} />;
      })}
      <div ref={bottomDiv} />
    </Container>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array,
  currentUser: PropTypes.string.isRequired
};

MessageList.defaultProps = {
  messages: []
};

export default MessageList;
