import styled from "styled-components";
import { Form } from "antd";

const { Item } = Form;

export default styled(Item)`
  position: relative;

  &.ant-form-item label {
    color: ${({ theme }) => theme.login.description};
    display: ${({ theme }) => theme.login.showFormItemLabel || "block"};
    &::before,
    &::after {
      display: none;
    }
  }

  & .ant-input {
    height: 40px;
    background: ${({ theme }) => theme.login.formItemBgColor};
    border-radius: ${({ theme }) => theme.login.formItemBorderRadius};
    border: ${({ theme }) =>
      theme.login.formItemBorderColor ? `1px solid ${theme.login.formItemBorderColor}` : undefined};
  }

  & .ant-form-item {
    margin-bottom: 22px;
  }

  & .ant-form-item-label {
    line-height: 28px;
  }

  & .remember-me {
    & .ant-form-item-children {
      display: flex;
      justify-content: space-evenly;
    }
  }
`;
