import React from "react";
import PropTypes from "prop-types";
import { Avatar, Icon } from "antd";

import NightIcon from "../../assets/icons/night";
import LockIcon from "../../assets/icons/lock";

import { Container, UserName, Infos, UserPicture, UnreadCount, StatusUser } from "./styled";

/**
 * @param {userName}userName  name of user
 * @param {string}  color     user name color
 * @param {bool}    favorite  user is in favorite list?
 * @param {string}  message   last message
 * @param {string}  time      time of last seen
 * @param {number}  badgeText count of unread messages or other notifications
 * @param {bool}    fromHeader  where is it used.
 * @param {bool}    isOnline  status of the user
 */
const UserCard = ({
  color,
  favorite,
  userName,
  message,
  time,
  badgeText,
  isOnline,
  fromHeader,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <UserPicture>
        <UnreadCount count={badgeText}>
          <Avatar icon="user" />
        </UnreadCount>
        {isOnline && <StatusUser />}
      </UserPicture>
      {userName && (
        <UserName fromHeader={fromHeader}>
          <p className="user-name" style={{ color }}>
            <span>{userName}</span>
            {favorite && <Icon type="star" theme="filled" />}
          </p>
          {message && <p className="user-message">{message}</p>}
        </UserName>
      )}
      {time && (
        <Infos>
          <div className="info-icons">
            <NightIcon />
            <LockIcon />
          </div>
          <div>{time}</div>
        </Infos>
      )}
    </Container>
  );
};

UserCard.propTypes = {
  userName: PropTypes.string,
  badgeText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  time: PropTypes.string,
  message: PropTypes.string,
  isOnline: PropTypes.bool,
  favorite: PropTypes.bool,
  fromHeader: PropTypes.bool
};

UserCard.defaultProps = {
  favorite: false,
  isOnline: false,
  wrapperClassName: "",
  userName: "",
  message: "",
  time: "",
  badgeText: null,
  color: null,
  fromHeader: false
};

export default UserCard;
