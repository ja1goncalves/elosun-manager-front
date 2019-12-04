import React, { useState } from 'react';
import { Formik } from 'formik';
import { TypeLoginFormik, LoginFormProps } from './login-form-types';
import { FormFieldset } from '../fieldset';
import { StyledSubmitButton } from '../submit-button';
import { loginValidations } from './login-form-validations';

export default ({ handleLoginSubmit, loadingSubmit }: LoginFormProps) => {
    const [initialLoginValues] = useState<TypeLoginFormik>({
        login: '',
        password: ''
    });

    return (
        <Formik initialValues={initialLoginValues} onSubmit={handleLoginSubmit} validationSchema={loginValidations}>
            {({ handleChange, handleSubmit, values, errors, submitCount }) => (
            <form onSubmit={handleSubmit} className="d-flex justify-content-center flex-column text-center">
                <FormFieldset
                    id="login"
                    type="text"
                    name="login"
                    placeholder="Nome de usuário"
                    value={values.login}
                    error={Boolean(errors.login)}
                    showError={Boolean(submitCount)}
                    onChange={handleChange}
                    />
                <FormFieldset
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={values.password}
                    error={Boolean(errors.password)}
                    showError={Boolean(submitCount)}
                    onChange={handleChange}
                    />
                <StyledSubmitButton isLoading={loadingSubmit} type="submit">
                    {loadingSubmit ? '...Carregando' : 'Acessar'}
                </StyledSubmitButton>
            </form>
            )}
        </Formik>
    )
}