import styled from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  left: 0px;
  padding: 0px 20px 20px;
`;

export const InnerContainer = styled.div`
  position: relative;
  background: white;
  padding: 15px 10px;
  border-radius: 16px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const InputWrapper = styled.div`
  background: #f2f3f5;
  border-radius: 8px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & .ant-input {
    height: 100%;
    background: transparent;
    flex: 1;
    border: 0px;

    &:focus {
      box-shadow: unset;
    }
  }
`;

export const CircleButton = styled(Button).attrs(() => ({
  shape: "circle"
}))`
  position: relative;
  margin-right: 16px;
  min-width: 18px;
  height: 18px;

  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
