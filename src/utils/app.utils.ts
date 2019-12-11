import { toast } from 'react-toastify';

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

export function notify({ type, message }: NotifyParam) {
    toast[type](message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
    });
}