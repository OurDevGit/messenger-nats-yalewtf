import React from "react";
import PropTypes from "prop-types";

const MenuIcon = ({ color, ...rest }) => (
  <svg width="16px" height="15px" viewBox="0 0 16 15" version="1.1" {...rest}>
    <title>Combined Shape</title>
    <g id="Messenger-Clone-Mobile" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Messenger-Clone-Chat-List-Mobile" transform="translate(-16.000000, -23.000000)">
        <g id="Rectangle"></g>
        <g id="Header" transform="translate(-0.500000, -0.500000)">
          <rect
            id="Rectangle"
            fill="url(#linearGradient-3)"
            transform="translate(195.500000, 31.000000) rotate(-270.000000) translate(-195.500000, -31.000000) "
            x="165"
            y="-164"
            width="61"
            height="390"
          ></rect>
          <path
            d="M31.5,35.5 C32.0522847,35.5 32.5,35.9477153 32.5,36.5 L32.5,37.5 C32.5,38.0522847 32.0522847,38.5 31.5,38.5 L17.5,38.5 C16.9477153,38.5 16.5,38.0522847 16.5,37.5 L16.5,36.5 C16.5,35.9477153 16.9477153,35.5 17.5,35.5 L31.5,35.5 Z M31.5,29.5 C32.0522847,29.5 32.5,29.9477153 32.5,30.5 L32.5,31.5 C32.5,32.0522847 32.0522847,32.5 31.5,32.5 L17.5,32.5 C16.9477153,32.5 16.5,32.0522847 16.5,31.5 L16.5,30.5 C16.5,29.9477153 16.9477153,29.5 17.5,29.5 L31.5,29.5 Z M31.5,23.5 C32.0522847,23.5 32.5,23.9477153 32.5,24.5 L32.5,25.5 C32.5,26.0522847 32.0522847,26.5 31.5,26.5 L17.5,26.5 C16.9477153,26.5 16.5,26.0522847 16.5,25.5 L16.5,24.5 C16.5,23.9477153 16.9477153,23.5 17.5,23.5 L31.5,23.5 Z"
            id="Combined-Shape"
            fill={color}
          ></path>
        </g>
      </g>
    </g>
  </svg>
);

MenuIcon.propTypes = {
  color: PropTypes.string
};

MenuIcon.defaultProps = {
  color: "white"
};

export default MenuIcon;
