import React from "react";
import PropTypes from "prop-types";
import { Icon } from "antd";
import { Container } from "./styled";

const Divider = ({ label }) => (
  <Container>
    <span>{label}</span>
    <Icon type="ellipsis" />
  </Container>
);

Divider.propTypes = {
  label: PropTypes.string
};

Divider.defaultProps = {
  label: ""
};

export default Divider;
