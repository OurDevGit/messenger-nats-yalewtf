import styled from "styled-components";

export const MessageBoard = styled.div`
  height: 100%;
  position: relative;
  background: ${({ theme }) => theme.messenger.messages.bgColor};

  ul {
    margin-bottom: 0px;
  }
`;

export const MessageListContainer = styled.div`
  height: calc(100% - 95px);
  overflow: auto;
`;

export const TypingIndicator = styled.small`
  position: absolute;
  bottom: 4px;
  left: 20px;
  z-index: 10;
`;
