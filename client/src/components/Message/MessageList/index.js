import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import UserCard from "../../UserCard";
import { Container, BubbleContent } from "./styled";
import ReplyIcon from "../../../assets/icons/reply";
import { connect } from "react-redux";
const Message = ({ message, isMe, createdAt, user, selected, users }) => {
  const [showReply, toggelReply] = useState(false);
  var user_arr = [];
  const userCardStyle = {
    padding: 0,
    marginLeft: isMe ? 16 : 0,
    marginRight: isMe ? 0 : 16
  };

  for(let i=0; i<users.length; i++)
  {
    user_arr[users[i].username] =  users[i]
  }
  
  const createdTime = moment(createdAt).format("HH:mmA");

  const handleMouseEnterLeave = () => toggelReply(!showReply);

  useEffect(()=>{
  })
  // const
  return (
    <BubbleContent
      className={isMe ? "me" : "other"}
      onMouseEnter={handleMouseEnterLeave}
      onMouseLeave={handleMouseEnterLeave}
    >
      <div className="user-avatar">
        {
          isMe ? 
            <UserCard isOnline style={userCardStyle} userAvatarLetter = {user.last_name ? `${user.first_name[0]}${user.last_name[0]}` : user.first_name[0]} />
          : <UserCard isOnline style={userCardStyle} userAvatarLetter = {user_arr[selected].last_name ? `${user_arr[selected].first_name[0]}${user_arr[selected].last_name[0]}` : user_arr[selected].first_name[0]} />
        }
        
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
  isMe: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};

const MessageList = ({ messages, currentUser, user, selected, users  }) => {
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
        return <Message key={id} message={message} isMe={isMe} user={user} users={users} selected={selected} />;
      })}
      <div ref={bottomDiv} />
    </Container>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array,
  currentUser: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

MessageList.defaultProps = {
  messages: []
};
const mapStateToProps = state => ({
  selected: state.users.selected,
  users: state.users.entities
});

const mapDispatchToProps = {
};
// export default MessageList;
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
