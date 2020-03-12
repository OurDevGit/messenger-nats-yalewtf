import React from "react";
import PropTypes from "prop-types";

const NightIcon = ({ color, ...rest }) => (
  <svg width="9px" height="9px" viewBox="0 0 9 9" version="1.1" {...rest}>
    <title>Shape</title>
    <g id="Messenger-Clone-Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Messenger-Clone-Chat" transform="translate(-346.000000, -265.000000)">
        <g
          id="Contacts"
          transform="translate(24.000000, 149.000000)"
          fill="#1D1F23"
          fillRule="nonzero"
        >
          <g id="Group-15" transform="translate(0.462822, 113.000000)">
            <g id="Group-3" transform="translate(321.537178, 3.000000)">
              <path
                d="M6.408,2.592 C5.8815,2.0655 5.193,1.8 4.5,1.8 L4.5,4.5 L2.592,6.408 C3.645,7.461 5.355,7.461 6.4125,6.408 C7.4655,5.355 7.4655,3.645 6.408,2.592 Z M4.5,0 C2.016,0 0,2.016 0,4.5 C0,6.984 2.016,9 4.5,9 C6.984,9 9,6.984 9,4.5 C9,2.016 6.984,0 4.5,0 Z M4.5,8.1 C2.511,8.1 0.9,6.489 0.9,4.5 C0.9,2.511 2.511,0.9 4.5,0.9 C6.489,0.9 8.1,2.511 8.1,4.5 C8.1,6.489 6.489,8.1 4.5,8.1 Z"
                id="Shape"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

NightIcon.propTypes = {
  color: PropTypes.string
};

NightIcon.defaultProps = {
  color: null
};

export default NightIcon;
