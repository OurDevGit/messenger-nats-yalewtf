import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Amplify, { Auth, Hub } from 'aws-amplify';
import aws_config from '../../aws-exports.js'
import { Form, Icon, Input, Checkbox, Divider, InputNumber } from "antd";
import AppLogo from "../AppLogo";
import PoochoLogo from "./poochoLogo";
import routes from "../../constants/routes";
import FormItem from "../FormItem";
import { fetchMeRequestAction, userConfirmpassRequestAction } from "../../store/actions/users";

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

Amplify.configure(aws_config);

const ConfirmForm = ({form, history , FailedMsg, userconfirmpass, Sentemail, ResetPassFlag}) => {
  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        values.email =  Sentemail;
        userconfirmpass(values);
      }
    });
  };

  const handleClickRegister = () => {
    history.push(routes.SIGNUP);
  };

  useEffect(()=>{
    if(!Sentemail && !ResetPassFlag){
      history.push(routes.LOGIN)
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
              We just sent verification code to your email.
              <br /> Check your email box!
            </PoochoFormTitle>
            <FormItem label="CODE">
              <ErrorDiv>{FailedMsg}</ErrorDiv>
              {getFieldDecorator("verificationCode", {
                rules: [{ required: true, message: "Please enter verify code!" }]
              })(
                <Input
                  style={{"textAlign": "center"}}
                  prefix={<Icon type="number" theme="outlined" style={{ color: "rgba(0,0,0,.25)" }} />}
                  placeholder="VERIFY CODE"
                />
              )}
            </FormItem>
            <FormItem label="Password">
              {getFieldDecorator("newPassword", {
                rules: [{ required: true, message: "Please input your Password!" }]
              })(
                <Input.Password
                  style={{"textAlign": "center"}}
                  prefix={<Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />}
                  placeholder="New Password"
                />
              )}
            </FormItem>
            <ActionCont>
              <ConfirmButton type="primary" htmlType="submit">
                Verify
              </ConfirmButton>
            </ActionCont>
          </Form>
        </div>
      </FormWrapper>

    </Container>
  );
};

ConfirmForm.propTypes = {
  form: PropTypes.object.isRequired,
  userLogin: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  fetchMe: PropTypes.func.isRequired,
  FailedMsg: state.users.FailedMsg,
  loading: state.users.loading,
  Sentemail: state.users.Sentemail,
  ResetPassFlag: state.users.ResetPassFlag
});

const mapDispatchToProps = {
  fetchMe: fetchMeRequestAction,
  userconfirmpass: userConfirmpassRequestAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: "normal_login" })(ConfirmForm));