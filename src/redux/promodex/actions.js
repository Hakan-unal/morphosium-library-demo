import { ADD_ROOM, REDUX_CHANGED } from "../constants/";

export const setSelectedRooms = (rooms) => {
  return {
    type: ADD_ROOM,
    rooms: rooms,
  };
};

export const setInlineRedux = (inlineInformation) => {
  return {
    type: REDUX_CHANGED,
    inlineInformation: inlineInformation,
  };
};
