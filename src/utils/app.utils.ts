
export const TOKEN_COOKIE = 'token';

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
    const removeKeyRegex = new RegExp(`^\s*${cname}=`, 'g');

    return cookie ?
        cookie.replace(removeKeyRegex, '') :
        '';
}

export function cleanCookie(): void {
    localStorage.clear();
    window.localStorage.clear();

    document.cookie = 'token';
    document.cookie = 'user_data';

    alert('Os cookies foram limpos com sucesso. Tente entrar no sistema novamente!');

    window.location.reload(!0);
}