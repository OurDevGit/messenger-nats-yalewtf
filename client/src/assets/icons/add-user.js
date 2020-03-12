import React from "react";
import PropTypes from "prop-types";

const AddUserIcon = ({ color, ...rest }) => (
  <svg width="26px" height="23px" viewBox="0 0 26 23" version="1.1" {...rest}>
    <title>add-user</title>
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      transform="translate(0, 1)"
    >
      <g id="add-user">
        <g id="user" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path
            d="M18,20.3008794 L18,18.0452261 C18,15.5537003 15.9852814,13.5339196 13.5,13.5339196 L4.5,13.5339196 C2.01471863,13.5339196 0,15.5537003 0,18.0452261 L0,20.3008794"
            id="Path"
          />
          <ellipse id="Oval" cx="9" cy="4.51130653" rx="4.5" ry="4.51130653" />
        </g>
        <g id="plus" transform="translate(16.500000, 3.000000)" />
        <line
          x1="16.5"
          y1="7.125"
          x2="24"
          y2="7.125"
          id="Path"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="16.5"
          y1="7.125"
          x2="24"
          y2="7.125"
          id="Path-1"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(20.250000, 7.125000) rotate(90.000000) translate(-20.250000, -7.125000) "
        />
      </g>
    </g>
  </svg>
);

AddUserIcon.propTypes = {
  color: PropTypes.string
};

AddUserIcon.defaultProps = {
  color: "#E9E7FD"
};

export default AddUserIcon;
