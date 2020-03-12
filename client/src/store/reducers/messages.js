import { createReducer } from "@reduxjs/toolkit";
import { get } from "lodash";
import {
  CREATE_MESSAGE_SUCCESS,
  NEW_MESSAGE_ARRIVED,
  RECEIVED_PRE_MESSAGE
} from "../actions/messages";

export const initialState = {
  entities: {}
};

const addMessage = (state, { payload }) => {
  const newMessages = get(state, `entities[${payload.sub}]`, []);
  newMessages.push(payload.newMsg);

  state.entities = {
    ...state.entities,
    [payload.sub]: newMessages
  };
};

const receivePreMsg = (state, { payload }) => {
  state.entities = {
    ...state.entities,
    [payload.sub]: payload.messages
  };
};

const messageReducer = createReducer(initialState, {
  [CREATE_MESSAGE_SUCCESS]: addMessage,
  [NEW_MESSAGE_ARRIVED]: addMessage,
  [RECEIVED_PRE_MESSAGE]: receivePreMsg
});

export default messageReducer;
