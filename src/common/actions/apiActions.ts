// @ts-ignore
import { APIMessages } from "custom-actions";

/** Action method for retrieving states */
export const getApiError = (info: any) => ({
  payload: info,
  type: APIMessages.UNKNOWN_ERROR
});
