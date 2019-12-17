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

export type GetEmailResetPasswordResponse = {
    email: string;
}

export type ResetPasswordParams = {
    email: string;
    password: string;
    password_confirmation: string;
    token: string;
}
