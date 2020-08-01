import ApiRequest from "./apiRequest";

export const spaceListAPi = async (body: any): Promise<any> => {
  return ApiRequest.get("launches", body, null, null);
};
