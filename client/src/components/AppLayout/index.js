import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Layout } from "antd";
import SideNav from "../SideNav";
import { Container, AppHeader, AppContent, AppSider, PageHeader, EmailSpan } from "./styled";

import GridIcon from "../../assets/icons/grid";

const AppLayout = ({logout, children }) => {
  const currentUser = useSelector(state=>state.users.currentUser)
  return (
    <Layout>
      <AppSider trigger={null} collapsible collapsed>
        <SideNav logout={logout} />
      </AppSider>
      <Container>
        <AppHeader>
          <PageHeader>
            <GridIcon />
              <span>Mastercard</span>
              <EmailSpan>{currentUser.email}</EmailSpan>
          </PageHeader>
        </AppHeader>
        <AppContent>{children}</AppContent>
      </Container>
    </Layout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  logout: PropTypes.func.isRequired,
};

export default AppLayout;
