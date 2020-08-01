import { put, takeLatest, call } from "redux-saga/effects";
import { spaceListAPi } from "../../api/spaceApi";
import { SpaceAction } from "../../actionConstants/spaceAction";

export function* getSpaceListDetails() {
  yield takeLatest(SpaceAction.GET_SPACE_VIEW_LIST, getSpaceListDetail);
}
function* getSpaceListDetail(action: any) {
  let response = yield call(spaceListAPi, action.params);
  if (response && !response.error) {
    yield put({
      type: SpaceAction.SPACE_LIST_RESPONSE,
      payload: response,
    });
  } else {
    yield put({
      type: SpaceAction.SPACE_LIST_RESPONSE_ERROR,
      payload: response,
    });
  }
}
