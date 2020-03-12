import React from "react";
import PropTypes from "prop-types";

const ReplyIcon = ({ color, ...rest }) => (
  <svg width="14px" height="10px" viewBox="0 0 14 10" version="1.1" {...rest}>
    <title>reply-all</title>
    <g id="Client" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="reply-all" fill={color}>
        <path
          d="M8.515625,3 L8.515625,0.5 L3.771875,4.99375 L8.515625,9.1875 L8.515625,6.315625 C10.640625,6.315625 11.8875,6.59375 13.4875,9.5 C13.4875,9.5 13.296875,3 8.515625,3 Z"
          id="Path"
        ></path>
        <polygon
          id="Path"
          points="0.484375 5 4.984375 8.953125 4.984375 7.125 2.415625 5 4.984375 2.54375 4.984375 0.7625"
        ></polygon>
      </g>
    </g>
  </svg>
);

ReplyIcon.propTypes = {
  color: PropTypes.string
};

ReplyIcon.defaultProps = {
  color: "#3c3b3c"
};

export default ReplyIcon;
