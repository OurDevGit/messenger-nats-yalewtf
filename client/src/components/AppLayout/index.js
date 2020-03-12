import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import SideNav from "../SideNav";
import { Container, AppHeader, AppContent, AppSider, PageHeader } from "./styled";

import GridIcon from "../../assets/icons/grid";

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <AppSider trigger={null} collapsible collapsed>
        <SideNav />
      </AppSider>
      <Container>
        <AppHeader>
          <PageHeader>
            <GridIcon />
            <span>Mastercard</span>
          </PageHeader>
        </AppHeader>
        <AppContent>{children}</AppContent>
      </Container>
    </Layout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppLayout;
