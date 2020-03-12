import React from "react";
import PropTypes from "prop-types";

const HomeIcon = ({ color, ...rest }) => (
  <svg width="26px" height="29px" viewBox="0 0 26 29" version="1.1" {...rest}>
    <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" {...rest}>
      <g id="home" transform="translate(1.000000, 0.000000)" stroke={color} strokeWidth="2">
        <path
          d="M12,0.0643863179 L24,9.41086519 L24,24.0981891 C24,25.5730228 22.8060927,26.7686117 21.3333333,26.7686117 L16,26.7686117 L16,13.360161 L8,13.360161 L8,26.7686117 L2.66666667,26.7686117 C1.19390733,26.7686117 0,25.5730228 0,24.0981891 L0,9.41086519 L12,0.0643863179 Z"
          id="path-2"
        />
      </g>
    </g>
  </svg>
);

HomeIcon.propTypes = {
  color: PropTypes.string
};

HomeIcon.defaultProps = {
  color: "#E9E7FD"
};

export default HomeIcon;
