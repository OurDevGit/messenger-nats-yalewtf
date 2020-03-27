import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Icon, Input } from "antd";
import AppLogo from "../AppLogo";
import PoochoLogo from "./poochoLogo";
import routes from "../../constants/routes";
import FormItem from "../FormItem";
import { fetchMeRequestAction, userConfirmpassRequestAction, userResendcodeRequestAction, userResetpassRequestAction } from "../../store/actions/users";

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

const ConfirmForm = ({form, history , FailedMsg, userconfirmpass, userresendcode, userResetpass, Sentuser, ResetPassFlag, confirmType}) => {
  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        values.email =  Sentuser.email;
        values.confirmType = confirmType;
        if(Sentuser.password){
          values.newPassword =  Sentuser.password
        }
        if(Sentuser.username)
        {
          values.username =  Sentuser.username;
        }
        console.log(values)
        userconfirmpass(values);
      }
    });
  };

  const handleResedVerificationCode = () =>{
    if(confirmType === "register")
    {
      var Request = {
        email: Sentuser.email,
        username: Sentuser.username
      }
      userresendcode(Request);
    }else if(confirmType === "resetpass"){
      userResetpass({
        "email": Sentuser.email,
        "username": Sentuser.email.replace(/@/g,"-").replace(/\./g, "_")
      })
    }
    
  }

  useEffect(()=>{
    console.log(confirmType)
    if(!Sentuser && !ResetPassFlag){
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
            {
              confirmType === "resetpass" ? 
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
              : null
            }
            
            <ActionCont>
              <ConfirmButton type="primary" htmlType="submit">
                Verify
              </ConfirmButton>
            </ActionCont>
            <p>Didn't received verification code?<a onClick={handleResedVerificationCode}>Resend verification code to your email</a></p>
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
  Sentuser: state.users.Sentuser,
  ResetPassFlag: state.users.ResetPassFlag,
  confirmType: state.users.confirmType
});

const mapDispatchToProps = {
  fetchMe: fetchMeRequestAction,
  userconfirmpass: userConfirmpassRequestAction,
  userresendcode: userResendcodeRequestAction,
  userResetpass: userResetpassRequestAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: "normal_login" })(ConfirmForm));