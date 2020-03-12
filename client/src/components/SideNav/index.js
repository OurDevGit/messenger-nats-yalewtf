import React from "react";
// import PropTypes from "prop-types";
import { Container, AppLogo, MenuCont, MainMenu, ExtraMenu, MenuItem } from "./styled";
import PoochoLogoIcon from "../../assets/icons/poocho-logo";
import HomeIcon from "../../assets/icons/home";
import LayersIcon from "../../assets/icons/layers";
import ChatIcon from "../../assets/icons/chat";
import AddUserIcon from "../../assets/icons/add-user";
import SettingIcon from "../../assets/icons/setting";
import LogoutIcon from "../../assets/icons/logout";

const SideNav = () => {
  return (
    <Container>
      <AppLogo>
        <PoochoLogoIcon />
      </AppLogo>
      <MenuCont>
        <MainMenu mode="inline">
          <MenuItem key="home">
            <i className="anticon">
              <HomeIcon />
            </i>
            <span>Home</span>
          </MenuItem>
          <MenuItem key="studies">
            <i className="anticon">
              <LayersIcon />
            </i>
            <span>menu 2</span>
          </MenuItem>
          <MenuItem key="message" acive={1}>
            <i className="anticon">
              <ChatIcon />
            </i>
            <span>menu 3</span>
          </MenuItem>
          <MenuItem key="add-user">
            <i className="anticon">
              <AddUserIcon />
            </i>
            <span>menu 4</span>
          </MenuItem>
        </MainMenu>
        <ExtraMenu>
          <MenuItem key="2">
            <i className="anticon">
              <SettingIcon />
            </i>
            <span>Setting</span>
          </MenuItem>
          <MenuItem key="3">
            <i className="anticon">
              <LogoutIcon />
            </i>
            <span>Log out</span>
          </MenuItem>
        </ExtraMenu>
      </MenuCont>
    </Container>
  );
};

SideNav.propTypes = {};

export default SideNav;
