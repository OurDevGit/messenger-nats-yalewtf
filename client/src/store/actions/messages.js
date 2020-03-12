import { createAction } from "@reduxjs/toolkit";

export const CREATE_MESSAGE_REQUEST = "[message] create message request";
export const CREATE_MESSAGE_SUCCESS = "[message] create message success";
export const CREATE_MESSAGE_FAILURE = "[message] create message failure";

export const createMessageRequestAction = createAction(CREATE_MESSAGE_REQUEST);
export const createMessageSuccessAction = createAction(CREATE_MESSAGE_SUCCESS);
export const createMessageFailureAction = createAction(CREATE_MESSAGE_FAILURE);

export const NEW_MESSAGE_ARRIVED = "[message] new message arrived";
export const newMessageArrivedAction = createAction(NEW_MESSAGE_ARRIVED);

export const RECEIVED_PRE_MESSAGE = "[message] received previous messages";
export const receivedPrevMessages = createAction(RECEIVED_PRE_MESSAGE);
