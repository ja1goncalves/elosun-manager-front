import { AxiosRequestConfig } from "axios";
import { TOKEN_COOKIE, getObjectCookie } from "./app.utils";

export const addAuthToken = (request: AxiosRequestConfig) => {
  const token = getObjectCookie(TOKEN_COOKIE);

  if (token) {
    const { token: { token_type, access_token } } = token;
    request.headers = {
      ...request.headers,
      Authorization: `${token_type} ${access_token}`
    }
  }

  return request;
}