import styled from "styled-components";
import { Input } from "antd";

export const InputWrapper = styled.div`
  padding: 22px 24px;
`;

export const Search = styled(Input)`
  height: 40px;

  & .ant-input {
    border-radius: 30px;
  }

  & svg {
    height: 16px;
    width: 16px;
  }
`;
