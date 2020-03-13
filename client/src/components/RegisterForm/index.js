import React, {useState} from "react";
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
  ActionCont,
  ErrorDiv,
} from "./styled";

const RegisterForm = ({ form, userSignup, history }) => {
  const { getFieldDecorator, validateFields, getFieldValue } = form;

  const handleSubmit = e => {
    e.preventDefault();
    var flag = true;
    validateFields((err, values) => {
      console.log(values)
      if(values.password && values.confirmPassword)
      {
        if(values.password != values.confirmPassword)
        {
          var flag =  false;
          setPassMathingErroFlag(false);
        }else{
          var flag = validateStrongPassword(values.password);
          setPassMathingErroFlag(true)
          setPassStrongErrorFlag(validateStrongPassword(values.password))
        }
        console.log(validateStrongPassword(values.password))
      }
      if (!err && flag == true) {
        userSignup(values);
      }
    });
  };

  const validateStrongPassword = (password) => {
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }
    if(ctr == 4)
    {
      return true
    }else{
      return false
    }
    console.log(ctr)
  }
  const [PassStrongErroFlag, setPassStrongErrorFlag] =  useState(true);
  const [PassMathingErroFlag, setPassMathingErroFlag] =  useState(true);

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
        <Form onSubmit={handleSubmit} className="login-form" >
          <FormDescription>START YOUR PERSONAL EXPIERENCE</FormDescription>
          <FormTitle>Create your account</FormTitle>

          <Form.Item label="Username(your email)">
            {getFieldDecorator("username", {
              rules: [{ required: true, message: "Please input your Username or Email!" }]
            })(<Input placeholder="Your username or Email" />)}
            <ErrorDiv hidden={true}>The two passwords that you entered do not match!</ErrorDiv>
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

          <Form.Item label="Password">
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Please input your Password!" }]
            })(
              <Input.Password
                prefix={<Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="Password"
              />
            )}
            <ErrorDiv hidden={PassStrongErroFlag}>Include Special Charector, Uppercase and Lowercase Alpabates, Numbers</ErrorDiv>
          </Form.Item>

          <Form.Item label="Confirm Password">
            {getFieldDecorator("confirmPassword", {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
              ]
            })(
              <Input.Password
                prefix={<Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="Confirm Password"
              />
            )}
            <ErrorDiv hidden={PassMathingErroFlag}>The two passwords that you entered do not match!</ErrorDiv>
          </Form.Item>
          <ActionCont>
            <SignupButton type="primary" htmlType="submit">
              SigntUp
            </SignupButton>
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
