import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { Menu, Dropdown, Icon, Input } from "antd";
import AppLogo from "../AppLogo";
import UserCard from "../UserCard";
import MobileButton from "./MobileButton";
import { Conatiner, SettingMenu } from "./styled";

const HeaderComponent = ({ theme, user, openSidebar, toggleSidebar }) => {
  const menu = (
    <Menu>
      <Menu.Item>Settings</Menu.Item>
      <Menu.Item>Log out</Menu.Item>
    </Menu>
  );

  const settings = (
    <Dropdown key="more" overlay={menu}>
      <SettingMenu>
        <UserCard
          color={theme.header.avatarColor}
          userName={`${user.first_name} ${user.last_name}`}
          fromHeader
        />
        <Icon type="down" className="menu-icon" />
      </SettingMenu>
    </Dropdown>
  );

  return (
    <Conatiner>
      <div className="app-logo">
        <AppLogo style={{ position: "relative" }} />
      </div>
      <div className="mobile-menu-button" onClick={toggleSidebar}>
        <MobileButton openSidebar={openSidebar} />
      </div>
      <div className="user-avatar">
        <div className="mobile-poocho" onClick={toggleSidebar}>
          <MobileButton openSidebar={openSidebar} />
        </div>
        <UserCard
          color={theme.header.avatarColor}
          userName={`${user.first_name} ${user.last_name}`}
        />
      </div>
      <div className="chat-search">
        <Input placeholder="Search within chat" prefix={<Icon type="search" />} />
      </div>
      <div className="page-title">Chats</div>
      <div className="extra-content">{settings}</div>
    </Conatiner>
  );
};

HeaderComponent.propTypes = {
  theme: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  openSidebar: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

export default withTheme(HeaderComponent);
