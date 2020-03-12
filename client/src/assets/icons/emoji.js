import React from "react";
import PropTypes from "prop-types";

const EmojiIcon = ({ color, ...rest }) => (
  <svg
    width="18px"
    height="18px"
    viewBox="0 0 18 18"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <title>emoji</title>
    <g id="Messenger-Clone-Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Messenger-Clone-Chat" transform="translate(-1270.000000, -836.000000)">
        <g id="add" transform="translate(420.000000, 824.000000)">
          <rect id="Rectangle" fill="#F2F3F5" x="0" y="0" width="990" height="42" rx="8" />
          <g
            id="Group-6"
            transform="translate(850.000000, 12.000000)"
            fill="#636874"
            fillRule="nonzero"
          >
            <path
              d="M13.59825,11.79825 C13.273875,11.532375 12.790125,11.57175 12.5175,11.88975 C11.63925,12.910875 10.35525,13.49625 8.99475,13.49625 C7.634625,13.49625 6.35025,12.910875 5.472,11.88975 C5.19975,11.572875 4.716,11.532375 4.39125,11.79825 C4.06725,12.0645 4.02525,12.53775 4.297875,12.85425 C5.46825,14.215125 7.1805,14.9955 8.99475,14.9955 C10.809375,14.9955 12.52125,14.215125 13.691625,12.85425 C13.96425,12.53775 13.92225,12.0645 13.59825,11.79825 M11.996625,6 C11.2935,6 10.871625,6.5625 10.871625,7.5 C10.871625,8.4375 11.2935,9 11.996625,9 C12.69975,9 13.121625,8.4375 13.121625,7.5 C13.121625,6.5625 12.69975,6 11.996625,6 M5.996625,6 C5.2935,6 4.871625,6.5625 4.871625,7.5 C4.871625,8.4375 5.2935,9 5.996625,9 C6.69975,9 7.121625,8.4375 7.121625,7.5 C7.121625,6.5625 6.69975,6 5.996625,6 M9,18 C4.029375,18 0,13.970625 0,9 C0,4.029375 4.029375,0 9,0 C13.970625,0 18,4.029375 18,9 C18,13.970625 13.970625,18 9,18"
              id="emoji"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

EmojiIcon.propTypes = {
  color: PropTypes.string
};

EmojiIcon.defaultProps = {
  color: null
};

export default EmojiIcon;
