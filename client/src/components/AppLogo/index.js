import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styled";
import MessageIcon from "../../assets/icons/message";

const AppLogo = ({ top, right, ...rest }) => {
  return (
    <Wrapper top={top} right={right} {...rest}>
      <span>messenger</span>
      <MessageIcon />
    </Wrapper>
  );
};

AppLogo.propTypes = {
  top: PropTypes.number,
  right: PropTypes.number
};

AppLogo.defaultProps = {
  top: null,
  right: null
};

export default AppLogo;
