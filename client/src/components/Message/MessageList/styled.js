import styled from "styled-components";

export const Container = styled.div`
  height: calc(100% - 95px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 30px 40px 0px;
`;

export const BubbleContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  padding: 8px 14px;
  font-size: 16px;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.messenger.messageHoverBgColor};
  }

  & .message {
    padding: 10px;

    & .created-time {
      font-size: 11px;
      color: #b9b9b9;
      margin-left: 12px;
    }
  }

  &.me {
    align-self: flex-end;
    color: ${({ theme }) => theme.messenger.myMessageColor};
    flex-direction: row-reverse;
    & .user-avatar {
      display: ${({ theme }) => theme.messenger.messages.avatarShow || "none"};
    }

    & .message {
      border-radius: ${({ theme }) => theme.messenger.messages.borderRadiusMe};
      background: ${({ theme }) => theme.messenger.myMessageBgColor};
    }
  }

  &.other {
    & .message {
      border-radius: ${({ theme }) => theme.messenger.messages.borderRadiusOther};
      background: ${({ theme }) => theme.messenger.messageBodyBgColor};
      color: ${({ theme }) => theme.messenger.otherMessageColor};
    }
  }

  & .reply-message {
    margin-left: 8px;
  }
`;
