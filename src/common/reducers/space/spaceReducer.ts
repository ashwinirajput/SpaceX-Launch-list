import { SpaceAction } from "../../actionConstants/spaceAction";

/**
 * @description - Switch cases for the dispatched User Actions.
 *
 * @param state - State of the store.
 * @param action - Dispatched action.
 */
const spaceReducer = (
  state = {
    spaceList: [],
  },
  action: { type: any; payload?: any }
) => {
  switch (action.type) {
    case SpaceAction.SPACE_LIST_RESPONSE:
      return {
        ...state,
        spaceList: action.payload,
      };
    case SpaceAction.SPACE_LIST_RESPONSE_ERROR:
      return {
        ...state,
        spaceList: [],
        spaceListError: action.payload,
      };
    default:
      return state;
  }
};

export default spaceReducer;
