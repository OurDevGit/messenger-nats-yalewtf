import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Form, Icon, Input, notification } from "antd";
import AppLogo from "../AppLogo";
import routes from "../../constants/routes";
import { userSignupRequestAction } from "../../store/actions/users";
import { connect } from "react-redux";
import Amplify, { Auth, Hub } from 'aws-amplify';
import aws_config from '../../aws-exports.js'
import GoogleIcon from "../../assets/icons/google.js"
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
  SocialButton,
  ErrorDiv,
} from "./styled";
Amplify.configure(aws_config);
const RegisterForm = ({ form, userSignup, history , FailedMsg, AuthFlag, AuthLoading}) => {
  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = e => {
    e.preventDefault();
    var flag = true;
    validateFields((err, values) => {
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
        values.username=values.email.replace(/@/g,"-").replace(/\./g, "_");
      }
      if (!err && flag == true) {
        userSignup(values);
      }
    });
  };

  useEffect(()=>{
    if(AuthFlag){
      history.push(routes.LOGIN);
    }
  })

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
    if(password.length >7)
    {
      ctr++;
    }
    if(ctr == 5)
    {
      return true
    }else{
      return false
    }
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
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Please input your Email!" }]
            })(<Input placeholder="Your username or Email" />)}
            <ErrorDiv>{FailedMsg}</ErrorDiv>
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
            <ErrorDiv hidden={PassStrongErroFlag}>Include Special Charector, Uppercase and Lowercase Alpabates, Numbers, minLength is 8</ErrorDiv>
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
            <SignupButton type="primary" htmlType="submit" >
              SigntUp
            </SignupButton>
          </ActionCont>
          <ActionCont>
            {/* <a style={{"margin":"0 auto"}} href="https://poochodemo.auth.us-east-1.amazoncognito.com/oauth2/authorize?identity_provider=Google&response_type=CODE&client_id=5foo8qktllsqfd8c91kh7bq8i6&scope=email"> */}
            <SocialButton type="primary" onClick={()=>{
                Auth.federatedSignIn({provider: "Google"})
              }}>
            {/* <Icon type="google" style={{ color: "rgba(0,0,0,.25)" }} /> */}
            <GoogleIcon />
              Sign in with Google
            </SocialButton>
            {/* </a> */}
          </ActionCont>
          <ActionCont>
            {/* <a style={{"margin":"0 auto"}} href="https://poochodemo.auth.us-east-1.amazoncognito.com/oauth2/authorize?identity_provider=Apple&response_type=CODE&client_id=5foo8qktllsqfd8c91kh7bq8i6&scope=email"> */}
            <SocialButton type="primary" onClick={()=>{
                Auth.federatedSignIn({provider: "SignInWithApple"})
              }}>
              <Icon type="apple" theme='filled' />
              Sign in with Apple
            </SocialButton>
              {/* </a> */}
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
const mapStateToProps = state => ({
  FailedMsg: state.users.FailedMsg,
  loading: state.users.loading,
  AuthFlag: state.users.AuthFlag,
  AuthLoading: state.users.AuthLoading
});

const mapDispatchToProps = {
  userSignupRequest: userSignupRequestAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: "normal_login" })(RegisterForm));
