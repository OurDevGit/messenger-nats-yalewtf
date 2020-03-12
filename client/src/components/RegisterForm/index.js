import React from "react";
import PropTypes from "prop-types";
import { Form, Icon, Input } from "antd";
import AppLogo from "../AppLogo";
import routes from "../../constants/routes";

import {
  Container,
  FormWrapper,
  LogoWrapper,
  Image,
  FormTitle,
  FormDescription,
  SignupButton,
  LoginButton,
  ActionCont
} from "./styled";

const RegisterForm = ({ form, userSignup, history }) => {
  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        userSignup(values);
      }
    });
  };

  const handleClickLogin = () => {
    history.push(routes.LOGIN);
  };

  return (
    <Container>
      <LogoWrapper>
        <Image />
        <AppLogo top={20} right={20} />
      </LogoWrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmit} className="login-form">
          <FormDescription>START YOUR PERSONAL EXPIERENCE</FormDescription>
          <FormTitle>Create your account</FormTitle>

          <Form.Item label="Username">
            {getFieldDecorator("username", {
              rules: [{ required: true, message: "Please input your Username!" }]
            })(<Input placeholder="Your username" />)}
          </Form.Item>

          <Form.Item label="First Name">
            {getFieldDecorator("given_name", {
              rules: [{ required: true, message: "Please input your First Name!" }]
            })(<Input placeholder="Your First name" />)}
          </Form.Item>

          <Form.Item label="Last Name">
            {getFieldDecorator("family_name", {
              rules: [{ required: true, message: "Please input your Last name!" }]
            })(<Input placeholder="Your Last name" />)}
          </Form.Item>

          <Form.Item label="E-Mail">
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Please input your email!" }]
            })(
              <Input
                prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="Your E-Mail"
              />
            )}
          </Form.Item>

          <Form.Item label="Password">
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Please input your Password!" }]
            })(
              <Input.Password
                prefix={<Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="Password"
              />
            )}
          </Form.Item>
          <ActionCont>
            <SignupButton type="primary" htmlType="submit">
              Register
            </SignupButton>
            <LoginButton type="primary" onClick={handleClickLogin}>
              Log in
            </LoginButton>
          </ActionCont>
        </Form>
      </FormWrapper>
    </Container>
  );
};

RegisterForm.propTypes = {
  form: PropTypes.object.isRequired,
  userSignup: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default Form.create({ name: "normal_login" })(RegisterForm);
