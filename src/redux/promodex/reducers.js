import { ADD_ROOM, REDUX_CHANGED } from "../constants";

export const selectedRoomsReducer = (rooms = [], action) => {
  if (action.type === ADD_ROOM) {
    rooms = action.rooms;

    return rooms;
  }

  return rooms;
};

export const inlineInformation = (
  inlineInformation = null,
  action
) => {
  if (action.type === REDUX_CHANGED) {
    inlineInformation = {
      ...inlineInformation,
      ...action.inlineInformation,
    };

    return inlineInformation;
  }

  return inlineInformation;
};
