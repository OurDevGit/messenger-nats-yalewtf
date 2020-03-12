import styled from "styled-components";
import { PageHeader } from "antd";

export const Conatiner = styled(PageHeader)`
  height: 62px;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.messenger.header.bgColor};

  & .ant-avatar {
    margin-right: 0px;
  }

  & .ant-page-header-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 0px;
  }

  & .page-title {
    color: white;
    font-size: 24px;
    font-weight: 700;
    margin-right: 18px;
    display: none;
  }

  & .mobile-menu-button {
    display: none;
  }

  & .app-logo,
  & .extra-content {
    display: ${({ theme }) => theme.messenger.header.logoShow || "block"};
  }

  & .user-avatar,
  & .chat-search {
    align-items: center;
    display: ${({ theme }) => theme.messenger.header.avatarShow || "block"};

    & .mobile-poocho {
      margin-right: 4px;
      padding: 4px;

      @media (min-width: ${({ theme }) => theme.brackPoints.md}) {
        display: none;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.brackPoints.md}) {
    & .page-title,
    & .mobile-menu-button {
      display: ${({ theme }) => theme.messenger.header.titleShow || "block"};
    }
    & .app-logo {
      display: none;
    }
    & .mobile-menu-button {
      padding: 8px;
    }
  }
`;

export const SettingMenu = styled.div`
  display: flex;
  align-items: center;
  & .menu-icon svg {
    fill: white;
    margin-left: 24px;
  }

  @media (max-width: ${({ theme }) => theme.brackPoints.md}) {
    & .menu-icon svg {
      margin-left: 4px;
    }
  }
`;
