import React from "react";
import PropTypes from "prop-types";

const LockIcon = ({ color, ...rest }) => (
  <svg width="7px" height="9px" viewBox="0 0 7 9" version="1.1" {...rest}>
    <title>Shape</title>
    <g id="Messenger-Clone-Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Messenger-Clone-Chat" transform="translate(-363.000000, -265.000000)">
        <g
          id="Contacts"
          transform="translate(24.000000, 149.000000)"
          fill="#1D1F23"
          fillRule="nonzero"
        >
          <g id="Group-15" transform="translate(0.462822, 113.000000)">
            <g id="Group-3" transform="translate(321.537178, 3.000000)">
              <path
                d="M23,3 L23,2.5 C23,1.12 21.88,0 20.5,0 C19.12,0 18,1.12 18,2.5 L18,3 C17.45,3 17,3.45 17,4 L17,8 C17,8.55 17.45,9 18,9 L23,9 C23.55,9 24,8.55 24,8 L24,4 C24,3.45 23.55,3 23,3 Z M22.2,3 L18.8,3 L18.8,2.5 C18.8,1.56 19.56,0.8 20.5,0.8 C21.44,0.8 22.2,1.56 22.2,2.5 L22.2,3 Z"
                id="Shape"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

LockIcon.propTypes = {
  color: PropTypes.string
};

LockIcon.defaultProps = {
  color: null
};

export default LockIcon;
