import React from "react";
import PropTypes from "prop-types";

const ChatIcon = ({ color, ...rest }) => (
  <svg width="26px" height="27px" viewBox="0 0 26 27" version="1.1" {...rest}>
    <title>icon/chat</title>
    <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="icon/chatX"
        transform="translate(0, 0)"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <g id="message-square">
          <path
            d="M24,16.0829016 C24,17.5632918 22.8060927,18.7633851 21.3333333,18.7633851 L5.33333333,18.7633851 L0,24.1243523 L0,2.68048359 C0,1.20009338 1.19390733,0 2.66666667,0 L21.3333333,0 C22.8060927,0 24,1.20009338 24,2.68048359 L24,16.0829016 Z"
            id="Path"
          />
        </g>
      </g>
    </g>
  </svg>
);

ChatIcon.propTypes = {
  color: PropTypes.string
};

ChatIcon.defaultProps = {
  color: "#E9E7FD"
};

export default ChatIcon;
