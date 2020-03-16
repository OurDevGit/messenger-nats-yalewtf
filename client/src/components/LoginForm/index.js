import React from "react";
import PropTypes from "prop-types";
import { Form, Icon, Input, Checkbox, Divider } from "antd";
import {
  AppleFilled
} from '@ant-design/icons';
import AppLogo from "../AppLogo";
import PoochoLogo from "./poochoLogo";
import routes from "../../constants/routes";
import FormItem from "../FormItem";
import GoogleIcon from "../../assets/icons/google.js"

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
  ForgotButton,
  SocialButton
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
      <LogoWrapper>
        <Image />
        <AppLogo top={20} right={20} />
        <PoochoLogo />
      </LogoWrapper>
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
            <div style={{position:'relative'}}>
            <FormItem className="remember-me">
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox style={{display:'block'}}>Remember me</Checkbox>)}
            </FormItem>
            <ForgotButton>
              <span className="forgot-button">Forgot password?</span>
            </ForgotButton>
            </div>
            <ActionCont>
              <SignupButton type="primary" onClick={handleClickRegister}>
                Register
              </SignupButton>
              <LoginButton type="primary" htmlType="submit">
                Log in
              </LoginButton>
            </ActionCont>

            <Divider>Or</Divider>
            <ActionCont>
              <SocialButton type="primary">
              {/* <Icon type="google" style={{ color: "rgba(0,0,0,.25)" }} /> */}
              <GoogleIcon />
                Sign in with Google
              </SocialButton>
            </ActionCont>
            <ActionCont>
              <SocialButton type="primary">
                <Icon type="apple" theme='filled' />
                Sign in with Apple
              </SocialButton>
            </ActionCont>
          </Form>
        </div>
      </FormWrapper>

    </Container>
  );
};

LoginForm.propTypes = {
  form: PropTypes.object.isRequired,
  userLogin: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default Form.create({ name: "normal_login" })(LoginForm);
