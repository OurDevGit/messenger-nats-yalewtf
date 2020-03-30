import React from "react";
import styled, { withTheme } from "styled-components";
import PoochoLogoIcon from "../../assets/icons/poocho-logo";

const PoochoLogo = ({ theme }) => {
  return theme.login.showPoochoLogo ? (
    <PoochoLogoContainer>
      <div className="logo-content">
        <PoochoLogoIcon color1="#3C3B3C" color2="#FFFFFF" width="160px" height="126px" />
        <p className="description">
          A conversational platform to help you collect
          <br />
          real-time text, audio and visual insights from the
          <br />
          people that matter most
        </p>
      </div>
    </PoochoLogoContainer>
  ) : null;
};

export default withTheme(PoochoLogo);

const PoochoLogoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;

  & .logo-content {
    text-align: center;
    margin: 0 auto;

    & .description {
      max-width: 420px;
      text-align: center;
      font-size: 16px;
      letter-spacing: 0.9px;
      line-height: 24px;
      color: #4a4a4a;
      margin-top: 24px;
    }
  }
`;
