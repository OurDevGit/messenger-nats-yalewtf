import styled from "styled-components";
import { Button, Form } from "antd";
import meetingImage from "../../assets/Images/meeting.png";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: ${({ theme }) => theme.login.flexDirection};
  background: ${({ theme }) => theme.login.bgColor};
`;

export const FormWrapper = styled.div`
  flex: 1;
  position: relative;

  & .login-form {
    width: 350px;
  }

  & .login-form-container {
    width: ${({ theme }) => theme.login.formWrapperWidth || "auto"};
    background: ${({ theme }) => theme.login.formWrapperBgColor};
    box-shadow: ${({ theme }) => theme.login.formWrapperBoxShaw};
    border-radius: ${({ theme }) => theme.login.formWrapperBorderRadius};
    padding: ${({ theme }) => theme.login.formWrapperPadding};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: ${({ theme }) => theme.login.formWrapperLeft};
    transform: ${({ theme }) => `translate(-${theme.login.formWrapperLeft}, -50%)`};
  }
`;

export const PoochoFormTitle = styled.h3`
  font-size: 24px;
  text-align: center;
  letter-spacing: 1.33px;
  color: #3b3a3b;
  line-height: 36px;
  display: ${({ theme }) => theme.login.showPoochoFormTitle || "none"};
`;

export const FormTitle = styled.h3`
  font-size: 30px;
  display: ${({ theme }) => theme.login.showMessengerFormTitle || "none"};

  @media (max-width: ${({ theme }) => theme.brackPoints.md}) {
    text-align: center;
  }
`;

export const FormDescription = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.login.description};
  display: ${({ theme }) => theme.login.showFormDescription || "block"};

  @media (max-width: ${({ theme }) => theme.brackPoints.md}) {
    text-align: center;
  }
`;

export const ActionCont = styled(Form.Item)`
  & .ant-form-item-children {
    display: flex;
    justify-content: ${({ theme }) => theme.login.btnAlignment || "space-between"};

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
  display: ${({ theme }) => theme.login.showSignupBtn || "block"};
  background: ${({ theme }) => theme.global.white};
  color: ${({ theme }) => theme.login.signupColor};

  &:hover,
  &:active,
  &:focus {
    background: ${({ theme }) => theme.global.gradient};
  }
`;

export const LoginButton = styled(StyledButton)`
  background: ${({ theme }) => theme.login.loginBtnBgColor};
  border-radius: ${({ theme }) => theme.login.loginBtnRadius};
  color: ${({ theme }) => theme.login.loginBtnColor};

  &:hover,
  &:active,
  &:focus {
    background: ${({ theme }) => theme.login.loginBtnBgColor};
    color: ${({ theme }) => theme.login.loginBtnColor};
  }

  &::after {
    display: ${({ theme }) => theme.login.showExtraBorder};
  }
`;

export const ForgotButton = styled.div`
  color: ${({ theme }) => theme.login.forgotButtonColor};
  position: relative;
  margin-bottom: 20px;
  min-height: 24px;

  & .forgot-button {
    position: ${({ theme }) => theme.login.forgotBtnPos};
    right: ${({ theme }) => theme.login.forgotBtnRight};
    top: 0px;
  }
`;

export const LogoWrapper = styled.div`
  flex: 1;
  position: relative;
  background: ${({ theme }) => theme.login.rightBgColor};
  height: 100%;

  @media (max-width: ${({ theme }) => theme.brackPoints.md}) {
    display: none;
  }
`;

export const Image = styled.img.attrs(() => ({ src: meetingImage, draggable: false }))`
  display: ${({ theme }) => theme.login.showMessengerLogo || "flex"};
  max-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
