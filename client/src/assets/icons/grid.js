import React from "react";
import PropTypes from "prop-types";

const GridIcon = ({ color, ...rest }) => (
  <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" {...rest}>
    <title>grid</title>
    <g
      id="Ui-Elements"
      transform="translate(0, 0)"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g id="grid" transform="translate(1, 1)">
        <rect id="Rectangle" x="0" y="0" width="6.22222222" height="6.22222222" />
        <rect id="Rectangle" x="9.77777778" y="0" width="6.22222222" height="6.22222222" />
        <rect id="Rectangle" x="9.77777778" y="9.77777778" width="6.22222222" height="6.22222222" />
        <rect id="Rectangle" x="0" y="9.77777778" width="6.22222222" height="6.22222222" />
      </g>
    </g>
  </svg>
);

GridIcon.propTypes = {
  color: PropTypes.string
};

GridIcon.defaultProps = {
  color: "#2C2C2C"
};

export default GridIcon;
