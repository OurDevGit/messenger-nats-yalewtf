import styled from "styled-components";
import { Button, Form } from "antd";
import meetingImage from "../../assets/Images/meeting.png";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const FormWrapper = styled.div`
  flex: 1;
  position: relative;

  & .login-form {
    width: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & .ant-form-item label {
    color: ${({ theme }) => theme.login.description};

    &::before,
    &::after {
      display: none;
    }
  }

  & .ant-input {
    height: 40px;
    border-radius: 20px;
  }

  & .ant-form-item {
    margin-bottom: 22px;
  }

  & .ant-form-item-label {
    line-height: 28px;
  }

  & .remember-me {
    & .ant-form-item-children {
      display: flex;
      justify-content: space-evenly;
    }
  }
`;

export const FormTitle = styled.h3`
  font-size: 30px;

  @media (max-width: ${({ theme }) => theme.brackPoints.md}) {
    text-align: center;
  }
`;

export const FormDescription = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.login.description};

  @media (max-width: ${({ theme }) => theme.brackPoints.md}) {
    text-align: center;
  }
`;

export const ActionCont = styled(Form.Item)`
  & .ant-form-item-children {
    display: flex;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.brackPoints.md}) {
      flex-direction: column;

      & button {
        width: 100%;
        margin-bottom: 16px;

        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }
`;
const StyledButton = styled(Button)`
  height: 36px;
  width: 156px;
  border-radius: 30px;
  position: relative;
  background-clip: padding-box;
  border: 0px;

  &::after {
    content: " ";
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    z-index: -1;
    border-radius: inherit;
    background: ${({ theme }) => theme.global.gradient};
  }
`;

export const SignupButton = styled(StyledButton)`
  background: ${({ theme }) => theme.global.white};
  color: ${({ theme }) => theme.login.signupColor};
  margin:0 auto;
  &:hover,
  &:active,
  &:focus {
    background: ${({ theme }) => theme.global.gradient};
  }
`;

export const LoginButton = styled(StyledButton)`
  background: ${({ theme }) => theme.global.gradient};

  &:hover,
  &:active,
  &:focus {
    background: ${({ theme }) => theme.global.white};
    color: ${({ theme }) => theme.login.signupColor};
  }
`;

export const ForgotButton = styled.a`
  color: ${({ theme }) => theme.login.forgotButtonColor};
`;

export const LogoWrapper = styled.div`
  flex: 1;
  position: relative;
  background: ${({ theme }) => theme.login.rightBgColor};

  @media (max-width: ${({ theme }) => theme.brackPoints.md}) {
    display: none;
  }
`;

export const Image = styled.img.attrs(() => ({ src: meetingImage, draggable: false }))`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ErrorDiv = styled.span`
  // position: absolute;
  // left: 0;
  // top: 20px;
  color: #f5222d;
`;
