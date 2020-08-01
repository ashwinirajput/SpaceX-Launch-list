import { combineReducers } from "redux";
import spaceReducer from "./space/spaceReducer";
const commonRootReducer = combineReducers({
  space: spaceReducer,
});
export default commonRootReducer;
