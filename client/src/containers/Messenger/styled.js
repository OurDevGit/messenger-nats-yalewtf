import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100%;
  @media (max-width: ${({ theme }) => theme.brackPoints.md}) {
    height: ${({ theme }) => theme.messenger.mHeight};
  }
`;

export const HeaderCont = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 100;
  width: ${({ theme }) => theme.messenger.header.width};

  @media (max-width: ${({ theme }) => theme.brackPoints.md}) {
    width: 100%;
  }
`;

export const MainCont = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 100%;
  padding-top: ${({ theme }) => theme.messenger.paddingTop};

  @media (max-width: ${({ theme }) => theme.brackPoints.md}) {
    top: ${({ theme }) => theme.messenger.mainCont.mTop};
    padding-top: ${({ theme }) => theme.messenger.mainCont.mPaddingTop};
  }
`;

export const UserlistCont = styled.div`
  background: ${({ theme }) => theme.sidebar.bgColor};
  box-shadow: ${({ theme }) => theme.sidebar.boxShadow};
  width: ${({ theme }) => theme.sidebar.sidebarWidth}px;
  margin-top: ${({ theme }) => theme.messenger.userList.marginTop};
  height: 100%;
  overflow: auto;

  @media (max-width: ${({ theme }) => theme.brackPoints.md}) {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    display: ${({ open }) => (open ? "block" : "none")};
  }
`;

export const MessageCont = styled.div`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.messenger.bgColor};
  width: ${({ theme }) => theme.messenger.messages.width};
  margin-top: ${({ theme }) => theme.messenger.messages.marginTop};

  @media (max-width: ${({ theme }) => theme.brackPoints.md}) {
    width: 100%;
    margin-top: 0px;
  }
`;
