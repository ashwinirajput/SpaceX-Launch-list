import { all } from "redux-saga/effects";
import { getSpaceListDetails } from "./space/spaceListSaga";
function* rootSaga() {
  yield all([getSpaceListDetails()]);
}

export default rootSaga;
