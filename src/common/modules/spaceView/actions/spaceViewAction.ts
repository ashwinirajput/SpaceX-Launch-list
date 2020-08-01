import { SpaceAction } from "../../../actionConstants/spaceAction";

export const getSpaceList = (params: any) => ({
  params,
  type: SpaceAction.GET_SPACE_VIEW_LIST,
});
