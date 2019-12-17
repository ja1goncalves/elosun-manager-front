export type RecoverPasswordProps = {
	token: string;
	email: string;
	setLoading: (param: boolean) => void;
}

export type TypeRecoverPasswordFormik = {
    email:string;
	password: string;
	password_confirmation: string;
}