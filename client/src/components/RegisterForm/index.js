import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Form, Icon, Input, notification } from "antd";
import AppLogo from "../AppLogo";
import routes from "../../constants/routes";
import { userSignupRequestAction } from "../../store/actions/users";
import { connect } from "react-redux";
import Amplify, { Auth } from 'aws-amplify';
import aws_config from '../../aws-exports.js'
import GoogleIcon from "../../assets/icons/google.js"
import { Error_Email_Required, Error_Password_Required, Error_FirstName_Required, Error_LastName_Required, Error_ConfirmPass_Required, Error_Email_Invalid, Error_Password_Invalid, Error_ConfirmPass_Invalid } from '../../constants/text'
import {
  Container,
  FormWrapper,
  LogoWrapper,
  Image,
  FormTitle,
  FormDescription,
  SignupButton,
  ActionCont,
  SocialButton,
  ErrorDiv,
} from "./styled";
Amplify.configure(aws_config);
const RegisterForm = ({ form, userSignup, history , FailedMsg, AuthFlag, AuthLoading}) => {
  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if(err)
      {
        notification.error({
          message: 'Error',
          description: Object.values(err)[0].errors[0].message,          
        });
      }
      var flag= true;
      if(values.password && values.confirmPassword)
      {
        if(values.password !== values.confirmPassword)
        {
          flag =  false;
          setPassMathingErroFlag(false);
          notification.error({
            message: 'Error',
            description: Error_ConfirmPass_Invalid,          
          });
        }else{
          flag = validateStrongPassword(values.password);
          setPassMathingErroFlag(true)
          setPassStrongErrorFlag(validateStrongPassword(values.password))
          if(flag === false)
          {
            notification.error({
              message: 'Error',
              description: Error_Password_Invalid,          
            });
          }
        }
        values.username=values.email.replace(/@/g,"-").replace(/\./g, "_");
      }
      if (!err && flag ===true) {
        userSignup(values);
      }
    });
  };

  useEffect(()=>{
    document.title = "Poocho messenger | Signup"
    if(AuthFlag){
      history.push(routes.CONFIRM);
    }
  })

  const validateStrongPassword = (password) => {
    var matchedCase = [];
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
    if(password.length >13)
    {
      ctr++;
    }
    if(ctr === 5)
    {
      return true
    }else{
      return false
    }
  }
  const [PassStrongErroFlag, setPassStrongErrorFlag] =  useState(true);
  const [PassMathingErroFlag, setPassMathingErroFlag] =  useState(true);

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

          <Form.Item label="Username(email)">
            {getFieldDecorator("email", {
              rules: [{ required: true, message: Error_Email_Required },
                      { type: 'email', message: Error_Email_Invalid }  
                    ]
            })(<Input placeholder="Username(Email)" />)}
            <ErrorDiv>{FailedMsg}</ErrorDiv>
          </Form.Item>

          <Form.Item label="First Name">
            {getFieldDecorator("given_name", {
              rules: [{ required: true, message: Error_FirstName_Required }]
            })(<Input placeholder="Your First name" />)}
          </Form.Item>

          <Form.Item label="Last Name">
            {getFieldDecorator("family_name", {
              rules: [{ required: true, message: Error_LastName_Required }]
            })(<Input placeholder="Your Last name" />)}
          </Form.Item>

          <Form.Item label="Password">
            {getFieldDecorator("password", {
              rules: [{ required: true, message: Error_Password_Required }]
            })(
              <Input.Password
                prefix={<Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="Password"
              />
            )}
            <ErrorDiv hidden={PassStrongErroFlag}>{Error_Password_Invalid}</ErrorDiv>
          </Form.Item>

          <Form.Item label="Confirm Password">
            {getFieldDecorator("confirmPassword", {
              rules: [
                {
                  required: true,
                  message: Error_ConfirmPass_Required,
                },
              ]
            })(
              <Input.Password
                prefix={<Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="Confirm Password"
              />
            )}
            <ErrorDiv hidden={PassMathingErroFlag}>{Error_ConfirmPass_Invalid}</ErrorDiv>
          </Form.Item>
          <ActionCont>
            <SignupButton type="primary" htmlType="submit" loading={AuthLoading}>
              Sign up with Email
            </SignupButton>
          </ActionCont>
          <ActionCont>
            {/* <a style={{"margin":"0 auto"}} href="https://poochodemo.auth.us-east-1.amazoncognito.com/oauth2/authorize?identity_provider=Google&response_type=CODE&client_id=5foo8qktllsqfd8c91kh7bq8i6&scope=email"> */}
            <SocialButton type="primary" onClick={()=>{
                Auth.federatedSignIn({provider: "Google"})
              }}>
            {/* <Icon type="google" style={{ color: "rgba(0,0,0,.25)" }} /> */}
            <GoogleIcon />
              Sign up with Google
            </SocialButton>
            {/* </a> */}
          </ActionCont>
          <ActionCont>
            {/* <a style={{"margin":"0 auto"}} href="https://poochodemo.auth.us-east-1.amazoncognito.com/oauth2/authorize?identity_provider=Apple&response_type=CODE&client_id=5foo8qktllsqfd8c91kh7bq8i6&scope=email"> */}
            <SocialButton type="primary" onClick={()=>{
                Auth.federatedSignIn({provider: "SignInWithApple"})
              }}>
              <Icon type="apple" theme='filled' />
              Sign up with Apple
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
