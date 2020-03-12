import React, { useState } from "react";
import ChatHeader from "./MessengerHeader";
import Message from "./Message";
import UserList from "./UserList";

import { Container, MainCont, MessageCont, UserlistCont, HeaderCont } from "./styled";

const MessengerContainer = () => {
  const [open, toggleUserList] = useState(false);

  const handleToggle = () => toggleUserList(!open);

  return (
    <Container>
      <HeaderCont>
        <ChatHeader openSidebar={open} toggleSidebar={handleToggle} />
      </HeaderCont>
      <MainCont>
        <UserlistCont open={open}>
          <UserList />
        </UserlistCont>
        <MessageCont>
          <Message />
        </MessageCont>
      </MainCont>
    </Container>
  );
};

export default MessengerContainer;
