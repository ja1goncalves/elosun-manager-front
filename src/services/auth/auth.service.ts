import axios, { AxiosRequestConfig } from "axios";
import { eraseCookie, getObjectCookie, getCookie } from "../../utils/app.utils";
import * as _ from 'lodash';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { LoginUserProps, AuthorizedUserResponse } from "./auth-types";

export default class AuthService {
  private readonly http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })
  private history = useHistory();

  constructor() {
    this.http.interceptors.request.use(request => this.addAuthToken(request));
  }

  private addAuthToken = (request: AxiosRequestConfig) => {
    const token = getObjectCookie('token');
    if (token) {
      const { token_type, access_token } = token;
      request.headers = {
        ...request.headers,
        authorization: `${token_type}\n${access_token}`
      }
    }
    // console.log('token parsed: ', token);

    return request;
  }

  /**
   *
   * @param {string} user
   */
  private createUserData(user: string): void {

    eraseCookie('user_data');
    document.cookie = `user_data=${user};Max-Age=21600`;

  }

  /**
   *
   * @param {string} token
   */
  private async createTokenData(token: string): Promise<void> {

    eraseCookie('token');
    const objToken: any = JSON.parse(token);
    const expires: number = objToken ? objToken.token.expires_in : 21600;

    const tokenCookieString = 'token='+token+';Max-Age='+expires;
    // TODO: Remover esta gambi, que foi colocada pois no CHROME, uma string concatenada com 2 parâmetros demora muito para carregar, não salvando o cookie.
    await new Promise((resolve) => {
      setTimeout(() => {
        document.cookie = tokenCookieString;
        resolve();
      }, 1000);
    })
  }

  /**
   *
   * @returns {any}
   */
  public getToken(): any {

    const jsonData: any = getObjectCookie('token');

    if (_.isEmpty(jsonData) && !_.isObject(jsonData)) {
      eraseCookie('token');
      this.history.push('login');
    } else {
      return jsonData.token.access_token;
    }

  }

  /**
   *
   * @returns {any}
   */
  public getDataUser(): any {

    const jsonData: any = getObjectCookie('user_data');
    if (_.isEmpty(jsonData) && !_.isObject(jsonData)) {
      this.logout();
    }

    return jsonData;

  }

  /**
   *
   * @returns {any}
   */
  public getUsername(): any {

    const jsonData: any = getObjectCookie('user_data');
    if (_.isEmpty(jsonData) && !_.isObject(jsonData)) {
      return '';
    }

    return jsonData.name;

  }

  /**
   *
   * @returns {boolean}
   */
  public isLoggedIn(): boolean {
    
    let result = false;

    try {
      moment.locale('pt-br');

      const tokenString: string = getCookie('token') || '{}';
      const userString: string = getCookie('user_data') || '{}';
      const token: any = JSON.parse(tokenString);
      const user: any = JSON.parse(userString);

      if ((token && token.token && token.token.access_token) && user) {

        const timeExpire = moment(parseInt(token.timeLogin, 10)).add(parseInt(token.token.expires_in, 10), 'seconds');
        const isTokenExpired = timeExpire.isBefore(moment());
        result = token.token.access_token != null && !isTokenExpired;
      }

    } catch (error) {
      result = false;
    }

    return result;

  }

  public logout(): void {

    eraseCookie('token');
    eraseCookie('user_data');
    this.history.push('login');
    window.stop();

  }

  /**
   *
   * @returns {Observable<any>}
   */
  public getUserAuthenticated(): Promise<any> {
    return this.http.get('/auth/user/');
  }

  /**
   *
   * @param {LoginUserProps} loginData
   * @returns {Promise<any>}
   */
  async loginUser({ login, password }: LoginUserProps): Promise<any> {

    const requestData = {
      password,
      username: login,
      "grant_type": process.env.REACT_APP_GRANT_TYPE,
      "client_secret": process.env.REACT_APP_CLIENT_SECRET,
      "client_id": process.env.REACT_APP_CLIENT_ID,
      "scope": process.env.REACT_APP_scope
    };
    let auth;

    await this.http.post('/oauth/token', requestData)
        .then(async (tokenInfo) => {
          const token: string = JSON.stringify({ token: tokenInfo.data, timeLogin: new Date().getTime() });
          await this.createTokenData(token);
          await this.getUserAuthenticated()
            .then((data) => {
            //   this.share.sendLoginState(true);
              const user = JSON.stringify(data);
              this.createUserData(user);
              auth = data; 
            //   observer.next();
            })
            .catch(_ => {
                this.history.push('login');
                this.logout();
            });
        });

    return Promise.resolve(auth);
  }
}