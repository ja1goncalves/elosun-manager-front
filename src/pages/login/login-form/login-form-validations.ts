import * as yup from 'yup';

export const loginValidations = yup.object().shape({
    login: yup.string().required('Insira o login').email('Insira um email válido'),
    password: yup.string().required('Insira a senha'),
});