import React from "react";
import PropTypes from "prop-types";
import { Form, Icon, Input, Checkbox } from "antd";
import AppLogo from "../AppLogo";
import PoochoLogo from "./poochoLogo";
import routes from "../../constants/routes";
import FormItem from "../FormItem";

import {
  Container,
  FormWrapper,
  LogoWrapper,
  Image,
  FormTitle,
  PoochoFormTitle,
  FormDescription,
  SignupButton,
  LoginButton,
  ActionCont,
  ForgotButton
} from "./styled";

const LoginForm = ({ form, userLogin, history }) => {
  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        userLogin(values);
      }
    });
  };

  const handleClickRegister = () => {
    history.push(routes.SIGNUP);
  };

  return (
    <Container>
      <FormWrapper>
        <AppLogo top={20} right={20} />
        <div className="login-form-container">
          <Form onSubmit={handleSubmit} className="login-form">
            <FormDescription>START YOUR PERSONAL EXPIERENCE</FormDescription>
            <FormTitle>Login your account</FormTitle>
            <PoochoFormTitle>
              Hello! Namaste,
              <br /> welcome to poocho.
            </PoochoFormTitle>
            <FormItem label="E-Mail">
              {getFieldDecorator("email", {
                rules: [{ required: true, message: "Please input your email!" }]
              })(
                <Input
                  prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
                  placeholder="Your E-Mail"
                />
              )}
            </FormItem>
            <FormItem label="Password">
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "Please input your Password!" }]
              })(
                <Input.Password
                  prefix={<Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />}
                  placeholder="Password"
                />
              )}
            </FormItem>
            <ForgotButton>
              <span className="forgot-button">Forgot password?</span>
            </ForgotButton>
            <ActionCont>
              <SignupButton type="primary" onClick={handleClickRegister}>
                Register
              </SignupButton>
              <LoginButton type="primary" htmlType="submit">
                Log in
              </LoginButton>
            </ActionCont>
            <FormItem className="remember-me">
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
            </FormItem>
          </Form>
        </div>
      </FormWrapper>
      <LogoWrapper>
        <Image />
        <AppLogo top={20} right={20} />
        <PoochoLogo />
      </LogoWrapper>
    </Container>
  );
};

LoginForm.propTypes = {
  form: PropTypes.object.isRequired,
  userLogin: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default Form.create({ name: "normal_login" })(LoginForm);
