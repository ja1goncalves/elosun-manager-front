import * as yup from 'yup';

export const recoverPasswordValidations = yup.object().shape({
    email: yup.string().required('Insira o login').email('Insira um email válido'),
    password: yup.string().required('Insira a senha'),
    password_confirmation: yup.string().required('Insira a senha'),
});