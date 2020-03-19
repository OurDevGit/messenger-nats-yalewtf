import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Icon, Input, Checkbox, Divider } from "antd";
import {
  AppleFilled
} from '@ant-design/icons';
import AppLogo from "../AppLogo";
import PoochoLogo from "./poochoLogo";
import routes from "../../constants/routes";
import FormItem from "../FormItem";
import GoogleIcon from "../../assets/icons/google.js"
import { userLoginFailureAction, fetchMeRequestAction, userSignupRequestAction } from "../../store/actions/users";

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
  SocialButton,
  ErrorDiv
} from "./styled";
import Amplify, { Auth, Hub } from 'aws-amplify';
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

Amplify.configure({
  // Auth:{
  //   region: process.env.AWS_REGION,
  //   identityPoolRegion: process.env.AWS_REGION,
  //   userPoolId: process.env.AWS_POOL_ID,
  //   userPoolWebClientId: process.env.AWS_CLIENT_ID,
  //   oauth: {
  //     domain: 'poochodemo.auth.us-east-1.amazoncognito.com',
  //     redirectSignIn: 'http://localhost:3001/',
  //     redirectSignOut: 'http://localhost:3001/',
  //     responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
  //   }
  // }
  Auth:{
    region: "us-east-1",
    identityPoolRegion: "us-east-1",
    userPoolId: "us-east-1_Qccxby2tn",
    userPoolWebClientId: "5foo8qktllsqfd8c91kh7bq8i6",
    oauth: {
      domain: 'poochodemo.auth.us-east-1.amazoncognito.com',
      redirectSignIn: 'http://localhost:3000/',
      // redirectSignOut: 'http://localhost:3001/',
      responseType: 'token', // or 'token', note that REFRESH token will only be generated when the responseType is code
      // grant_type:"authorization_code",
      scope: ["email", "profile"]
    }
  }
});
const LoginForm = ({SignupRequest, form, userLogin, history , FailedMsg, location}) => {
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

  useEffect(()=>{
    Auth.currentAuthenticatedUser({
      bypassCache: false
    })
    .then(user=>{
      var Request = {
        "username": user.username,
        "email": user.signInUserSession.idToken.payload.email,
        "given_name": user.signInUserSession.idToken.payload.given_name,
        "family_name": user.signInUserSession.idToken.payload.family_name,
        "social": true
      }
      SignupRequest(Request)
    })
    .catch(err => console.log("err",err))
  })

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
              <ErrorDiv>{FailedMsg}</ErrorDiv>
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
              {/* <a href="https://poochodemo.auth.us-east-1.amazoncognito.com/oauth2/authorize?identity_provider=Google&response_type=CODE&client_id=5foo8qktllsqfd8c91kh7bq8i6&scope=email"> */}
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
              <a href="https://poochodemo.auth.us-east-1.amazoncognito.com/oauth2/authorize?identity_provider=Apple&response_type=CODE&client_id=5foo8qktllsqfd8c91kh7bq8i6&scope=email">
              <SocialButton type="primary">
                <Icon type="apple" theme='filled' />
                Sign in with Apple
              </SocialButton>
              </a>
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

const mapStateToProps = state => ({
  fetchMe: PropTypes.func.isRequired,
  FailedMsg: state.users.FailedMsg,
  loading: state.users.loading
});

const mapDispatchToProps = {
  userLoginFailure: userLoginFailureAction,
  fetchMe: fetchMeRequestAction,
  SignupRequest: userSignupRequestAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: "normal_login" })(LoginForm));