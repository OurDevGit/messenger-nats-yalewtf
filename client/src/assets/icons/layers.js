import React from "react";
import PropTypes from "prop-types";

const LayersIcon = ({ color, ...rest }) => (
  <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" {...rest}>
    <title>icon 2</title>
    <g
      id="layers"
      stroke={color}
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      transform="translate(1, 1.5)"
    >
      <polygon id="Path" strokeWidth="2" points="12 0 0 6 12 12 24 6" />
      <polyline id="Path" strokeWidth="2" points="0 18 12 24 24 18" />
      <polyline id="Path" strokeWidth="2" points="0 12 12 18 24 12" />
    </g>
  </svg>
);

LayersIcon.propTypes = {
  color: PropTypes.string
};

LayersIcon.defaultProps = {
  color: "#E9E7FD"
};

export default LayersIcon;
