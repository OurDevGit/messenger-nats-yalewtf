import { get } from "lodash";

export const getMessagesSelector = state => {
  const selectedUser = get(state, "users.selected", null);
  if (!selectedUser) {
    return [];
  }
  const messages = get(state, `messages.entities[${selectedUser}]`, []);
  return messages;
};
