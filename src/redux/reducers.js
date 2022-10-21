import { combineReducers } from "redux";
import { inlineInformation } from "./promodex/reducers";

const reducers = combineReducers({
  inlineInformation: inlineInformation,
});

export default reducers;
