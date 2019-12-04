import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormFieldset } from '../fieldset';
import { StyledSubmitButton } from '../submit-button';
import { forgotPasswordValidations } from './forgot-password-validations';
import { TypeForgotPasswordFormik, ForgotPasswordProps } from './forgot-password-types';

export default ({ handleForgotPasswordSubmit, loadingSubmit }: ForgotPasswordProps) => {
    const [initialForgotPasswordValues] = useState<TypeForgotPasswordFormik>({
        login: '',
    });

    return (
        <Formik initialValues={initialForgotPasswordValues} onSubmit={handleForgotPasswordSubmit} validationSchema={forgotPasswordValidations}>
            {({ handleChange, handleSubmit, values, errors, submitCount }) => (
            <form onSubmit={handleSubmit} className="d-flex justify-content-center flex-column text-center">
                <p className="text-secondary mb-4">Digite o email da sua conta</p>
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
                <StyledSubmitButton isLoading={loadingSubmit} type="submit">
                    {loadingSubmit ? '...Carregando' : 'Enviar'}
                </StyledSubmitButton>
            </form>
            )}
        </Formik>
    )
}