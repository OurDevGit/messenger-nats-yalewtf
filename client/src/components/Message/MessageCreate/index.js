import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "antd";

import { Container, InnerContainer, InputWrapper, CircleButton } from "./styled";

import EmojieIcon from "../../../assets/icons/emoji";
import CameraIcon from "../../../assets/icons/camera";
import AgendaIcon from "../../../assets/icons/agenda";
import GifIcon from "../../../assets/icons/gif";

const MessageCreate = ({ onSubmit, onTyping, disable }) => {
  const [tempMessage, setTempMessage] = useState("");

  const handleChange = e => {
    setTempMessage(e.target.value);
    onTyping();
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit(tempMessage);
      setTempMessage("");
    }
  };

  return (
    <Container>
      <InnerContainer>
        <InputWrapper>
          <Input
            value={tempMessage}
            onChange={handleChange}
            onKeyPress={handleKeyDown}
            autoComplete="off"
            placeholder="Type a message..."
            disabled={disable}
          />
          <CircleButton>
            <EmojieIcon />
          </CircleButton>
          <CircleButton>
            <CameraIcon />
          </CircleButton>
          <CircleButton>
            <GifIcon />
          </CircleButton>
          <CircleButton>
            <AgendaIcon />
          </CircleButton>
        </InputWrapper>
      </InnerContainer>
    </Container>
  );
};

MessageCreate.propTypes = {
  onTyping: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired
};

export default MessageCreate;
