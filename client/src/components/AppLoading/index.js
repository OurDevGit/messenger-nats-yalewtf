import React from "react";
import styled from "styled-components";
import { Spin } from "antd";

export default () => (
  <Wrapper>
    <Spin />
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  height: 100vh;

  & .ant-spin {
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;
