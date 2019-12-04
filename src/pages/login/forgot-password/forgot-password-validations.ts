import * as yup from 'yup';

export const forgotPasswordValidations = yup.object().shape({
    login: yup.string().required('Insira o login'),
});