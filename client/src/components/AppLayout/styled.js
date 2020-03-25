import styled from "styled-components";
import { Layout, PageHeader as AntPageHeader } from "antd";

const { Header, Content, Sider } = Layout;

export const Container = styled(Layout)`
  background: ${({ theme }) => theme.layout.contentBgColor};
`;

export const AppHeader = styled(Header)`
  background: ${({ theme }) => theme.layout.headerBgColor};
  height: ${({ theme }) => theme.layout.headerHeight};
  display: ${({ theme }) => theme.layout.headerShow || "block"};
  padding: ${({ theme }) => theme.layout.headerPadding};
  align-items: center;
`;

export const AppContent = styled(Content)`
  height: ${({ theme }) => theme.layout.contentHeight};
  margin: ${({ theme }) => theme.layout.contentMargin};
  box-shadow: ${({ theme }) => theme.layout.contentBoxShadow};
  border-radius: ${({ theme }) => theme.layout.contnetBorderRadius};
`;

export const AppSider = styled(Sider).attrs(() => ({
  collapsedWidth: 112
}))`
  background: #3c3b3c;
  display: ${({ theme }) => theme.layout.sideNavShow || "block"};
`;

export const PageHeader = styled(AntPageHeader)`
  height: 62px;
  flex: 1;
  background: ${({ theme }) => theme.header.bgColor};
  border: ${({ theme }) => `1px solid ${theme.header.borderColor}`};
  box-shadow: ${({ theme }) => theme.header.boxShadow};
  border-radius: ${({ theme }) => theme.header.borderRadius};
  display: flex;
  align-items: center;
  padding: 0px 24px;

  & .ant-page-header-content {
    padding: 0px;

    & svg {
      margin-right: 18px;
    }
    & span {
      font-size: 18px;
    }
  }
`;
export const EmailSpan = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.login.description};
  position: absolute;
  right: 24px;
  @media (max-width: ${({ theme }) => theme.brackPoints.md}) {
    text-align: center;
  }
`;