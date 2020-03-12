import React from "react";
import { Icon } from "antd";
import { InputWrapper, Search } from "./styled";

const SearchInput = () => (
  <InputWrapper>
    <Search prefix={<Icon type="search" />} placeholder="Users search" />
  </InputWrapper>
);

export default SearchInput;
