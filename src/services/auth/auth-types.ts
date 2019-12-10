export type LoginUserProps = {
    login: string;
    password: string;
}

export type AuthorizedUserResponse = {
    token_type: 'Bearer',
    expires_in: number,
    access_token: string;
    refresh_token: string;
}