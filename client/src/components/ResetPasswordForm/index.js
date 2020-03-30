import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Icon, Input } from "antd";
import AppLogo from "../AppLogo";
import PoochoLogo from "./poochoLogo";
import routes from "../../constants/routes";
import FormItem from "../FormItem";
import { fetchMeRequestAction, userCombineWithSocialRequestAction } from "../../store/actions/users";
import { Error_Password_Invalid } from '../../constants/text'
import {
  Container,
  FormWrapper,
  LogoWrapper,
  Image,
  FormTitle,
  PoochoFormTitle,
  FormDescription,
  ConfirmButton,
  ActionCont,
  ErrorDiv
} from "./styled";

const ResetPasswordForm = ({form, history, LoginEmail, AuthFlag, combineWithSocial}) => {
  const { getFieldDecorator, validateFields } = form;

  const [PassStrongErroFlag, setPassStrongErrorFlag] =  useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        setPassStrongErrorFlag(validateStrongPassword(values.password));
        if(validateStrongPassword(values.password)){
          values.email = LoginEmail;
          combineWithSocial(values);
        }
      }
    });
  };
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

  useEffect(()=>{
    if(AuthFlag){
      history.push(routes.CONFIRM);
    }
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
              Please put your password.
            </PoochoFormTitle>
              <FormItem label="Password">
                {getFieldDecorator("password", {
                  rules: [{ required: true, message: "Please input your Password!" }]
                })(
                  <Input.Password
                    style={{"textAlign": "center"}}
                    prefix={<Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />}
                    placeholder="New Password"
                  />
                )}
                <ErrorDiv hidden={PassStrongErroFlag}>{Error_Password_Invalid}</ErrorDiv>
              </FormItem>
            
            <ActionCont>
              <ConfirmButton type="primary" htmlType="submit"> RESET
              </ConfirmButton>
            </ActionCont>
          </Form>
        </div>
      </FormWrapper>

    </Container>
  );
};

ResetPasswordForm.propTypes = {
  form: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  fetchMe: PropTypes.func.isRequired,
  LoginEmail: state.users.LoginEmail,
  AuthFlag: state.users.AuthFlag
});

const mapDispatchToProps = {
  fetchMe: fetchMeRequestAction,
  combineWithSocial: userCombineWithSocialRequestAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: "normal_login" })(ResetPasswordForm));