import styled, { css } from "styled-components";
import { Menu } from "antd";

export const Container = styled.div`
  /* width: 100%; */
`;

export const AppLogo = styled.div`
  margin: 32px;
  height: 37px;
  width: 47px;
`;

export const MenuCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 110px);
  padding: 18px 0px;
`;

const StyledMenu = styled(Menu)`
  width: 100%;
  background: transparent;
  border: 0px;

  & .ant-menu-item {
    height: 56px;
  }
`;

export const MainMenu = styled(StyledMenu)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ExtraMenu = styled(StyledMenu)`
  & .ant-menu-item {
    margin-top: 40px;
  }
`;

const aciveCss = css`
  & svg g,
  & svg line {
    stroke: ${({ theme }) => theme.sidebar.activeMenuColor};
  }

  &::before {
    content: " ";
    height: 100%;
    width: 0px;
    position: absolute;
    right: 0;
    border-left: ${({ theme }) => `3px solid ${theme.sidebar.activeMenuColor}`};
  }
`;

export const MenuItem = styled(Menu.Item)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & i {
    display: flex;
  }

  ${({ acive }) => acive && aciveCss}

  &:hover {
    ${aciveCss}
  }

  &.ant-menu-item-selected {
    background-color: transparent !important;
  }
`;
