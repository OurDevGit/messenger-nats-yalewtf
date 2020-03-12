import React from "react";
import PropTypes from "prop-types";

const HomeIcon = ({ color, ...rest }) => (
  <svg width="25px" height="24px" viewBox="0 0 25 24" version="1.1" {...rest}>
    <g id="Messenger-Clone-Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Messenger-Clone-Login" transform="translate(-1395.000000, -19.000000)">
        <g
          id="three-persons-sitting-on-the-stairs-talking-with-each-other-1438072-(1)"
          transform="translate(720.000000, 0.000000)"
        >
          <rect
            id="Rectangle"
            fill="url(#linearGradient-3)"
            mask="url(#mask-2)"
            transform="translate(360.000000, 450.000000) rotate(-270.000000) translate(-360.000000, -450.000000) "
            x="-90"
            y="90"
            width="900"
            height="720"
          />
        </g>
        <g
          id="logo"
          transform="translate(1212.000000, 19.000000)"
          fill="#FFFFFF"
          fillRule="nonzero"
        >
          <path
            d="M195.5,0 C188.908936,0 183.5,5.40893555 183.5,12 C183.5,14.175293 184.086487,16.2929077 185.198669,18.1455689 L183.5,24 L189.354431,22.3013306 C191.207092,23.4135132 193.324707,24 195.5,24 C202.091064,24 207.5,18.5910645 207.5,12 C207.5,5.40893555 202.091064,0 195.5,0 Z"
            id="Shape"
          />
        </g>
      </g>
    </g>
  </svg>
);

HomeIcon.propTypes = {
  color: PropTypes.string
};

HomeIcon.defaultProps = {
  color: null
};

export default HomeIcon;
