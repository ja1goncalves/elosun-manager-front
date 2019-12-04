import * as yup from 'yup';

export const loginValidations = yup.object().shape({
    login: yup.string().required('Insira o login').matches(/^(?:[a-zA-Z])+$/, 'Insira um login válido'),
    password: yup.string().required('Insira a senha'),
});