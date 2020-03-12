import React from "react";
import PropTypes from "prop-types";

const LogoutIcon = ({ color, ...rest }) => (
  <svg width="26px" height="25px" viewBox="0 0 26 25" version="1.1" {...rest}>
    <title>logout</title>
    <g id="icon/logout" strokeWidth="1" fill="none" fillRule="evenodd" stroke={color}>
      <g id="Logout" transform="translate(0.000000, 0.000000)">
        <line
          x1="6.46153846"
          y1="11.3800866"
          x2="23.0769231"
          y2="11.3800866"
          id="Path-Copy-2"
          strokeWidth="2"
          transform="translate(14.769231, 11.380087) rotate(180.000000) translate(-14.769231, -11.380087) "
        />
        <line
          x1="14.9276057"
          y1="7.84615385"
          x2="24.158375"
          y2="7.84615385"
          id="Path-Copy-3"
          strokeWidth="2"
          transform="translate(19.542990, 7.846154) rotate(45.000000) translate(-19.542990, -7.846154) "
        />
        <line
          x1="14.9276057"
          y1="15.2307692"
          x2="24.158375"
          y2="15.2307692"
          id="Path-Copy-4"
          strokeWidth="2"
          transform="translate(19.542990, 15.230769) scale(1, -1) rotate(45.000000) translate(-19.542990, -15.230769) "
        />
        <path
          d="M15.6923077,16.0163448 L15.6923077,13.2401562 C15.6923077,10.1736629 13.212654,7.68777888 10.1538462,7.68777888 L-0.923076923,7.68777888 C-3.98188477,7.68777888 -6.46153846,10.1736629 -6.46153846,13.2401562 L-6.46153846,16.0163448"
          id="Path"
          strokeWidth="2"
          transform="translate(4.615385, 11.852062) rotate(-90.000000) translate(-4.615385, -11.852062) "
        />
      </g>
    </g>
  </svg>
);

LogoutIcon.propTypes = {
  color: PropTypes.string
};

LogoutIcon.defaultProps = {
  color: "#E9E7FD"
};

export default LogoutIcon;
