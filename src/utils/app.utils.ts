import { toast } from 'react-toastify';

import moment from 'moment';

export const TOKEN_COOKIE = 'token';
export const USER_DATA_COOKIE = 'user_data';

export function eraseCookie(...name: string[]): any {
    name.forEach(e => {
        document.cookie = `${e}=123;max-age=0;`;
    });
}

export function getObjectCookie(cname: string): any {
    const cookie = getCookie(cname);
    return cookie ? JSON.parse(cookie) : undefined;
}

export function getCookie(cname: string): string {
    const ca = document.cookie.split(';');

    const cookie: string | undefined = ca.find(cookieString => {
        return cookieString.includes(cname);
    })
    const removeKeyRegex = new RegExp(`^ *${cname}=`, 'g');

    return cookie ?
        cookie.replace(removeKeyRegex, '') :
        '';
}

export function cleanCookie(): void {
    localStorage.clear();
    window.localStorage.clear();

    document.cookie = TOKEN_COOKIE;
    document.cookie = USER_DATA_COOKIE;

    alert('Os cookies foram limpos com sucesso. Tente entrar no sistema novamente!');

    window.location.reload(!0);
}

type NotifyParam = {
    type: 'error' | 'success';
    message: string;
}

/**
 * @description Mostra um Toast com um tipo e mensagem
 * @param {NotifyParam} param0
 * - type: tipo do toast, altera a cor de background
 * - message: mensagem que aparecerá no modal
 */
export function notify({ type, message }: NotifyParam) {
    toast[type](message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
    });
}


/**
 * @description 
 * Transforms all keys and values of a string with queryStrings
 * in an object with the keys and values of the queryString
 * 
 * @param {string} stringWithQueryString 
 * @returns {{ [key: string]: string }} Object containing the query string
 */
export const queryStringToObject = function (stringWithQueryString: string = ''): any | null {
    const queries = stringWithQueryString.match(/\w+=[^&]+/g);
    if (queries) {
        const obj: { [key: string]: string } = {};
        queries.forEach(queryString => {
            const [key, value] = queryString.split('=');
            obj[key] = value;
        })
        return obj;
    }
    return null;
}



export const stringToBrDateTime = (dateString: string, useHour: boolean = false) => {
    const momentDate = moment(dateString, 'YYYY-MM-DD' + (useHour ? ' H:m:s' : ''));

    return momentDate.format('DD/MM/YYYY' + (useHour ? ' H:m:s' : ''));
}