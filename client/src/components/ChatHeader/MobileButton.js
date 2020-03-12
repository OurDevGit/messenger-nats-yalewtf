import React from "react";
import PropTypes from "prop-types";
import MenuIcon from "../../assets/icons/menu";
import LeftArrowIcon from "../../assets/icons/leftArrow";

const MobileButton = ({ openSidebar, ...rest }) => (
  <div {...rest}>
    {openSidebar && <MenuIcon />}
    {!openSidebar && <LeftArrowIcon />}
  </div>
);

MobileButton.propTypes = {
  openSidebar: PropTypes.bool.isRequired
};

export default MobileButton;
