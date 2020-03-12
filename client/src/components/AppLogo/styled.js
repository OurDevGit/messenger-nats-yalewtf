import styled from "styled-components";

export const Wrapper = styled.div`
  display: ${({ theme }) => theme.login.showMessengerLogo || "flex"};
  align-items: center;
  position: absolute;
  right: ${({ right }) => (right ? `${right}px` : "")};
  top: ${({ top }) => (top ? `${top}px` : "")};

  & span {
    color: ${({ theme }) => theme.login.rightlabel};
    font-size: 24px;
    font-weight: 700;
    margin-right: 18px;
  }

  & svg {
    height: 24px;
    width: 24px;
  }

  @media (max-width: ${({ theme }) => theme.brackPoints.md}) {
    right: 50%;
    transform: translateX(50%);

    & span {
      color: ${({ theme }) => theme.login.mobileColor};
      font-size: 32px;
      font-weight: 700;
      margin-right: 18px;
    }

    & svg g {
      fill: ${({ theme }) => theme.login.mobileColor};
    }
  }
`;
