import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { FormFieldset } from '../../login/fieldset';
import { TypeRecoverPasswordFormik, RecoverPasswordProps } from './recover-form-types';
import { recoverPasswordValidations } from './recover-form-validations';
import { StyledSubmitButton } from '../../login/submit-button';
import { AuthService } from '../../../services/auth';
import { notify } from '../../../utils/app.utils';

export default ({ token, email, setLoading }: RecoverPasswordProps) => {
    const [recPassValues, setRecPass] = useState<TypeRecoverPasswordFormik>({
        email: '',
        password: '',
        password_confirmation: '',
    });
    const authService = new AuthService();

    const handleRecoverPasswordSubmit = (formik: TypeRecoverPasswordFormik) => {
        setLoading(true);

        authService.resetPassword({ token, ...formik })
            .then(res => {
                notify({
                    type: 'success',
                    message: 'Sua senha foi alterada!',
                });
                setLoading(false);
            })
            .catch(err => {
                notify({
                    type: 'error',
                    message: 'Aconteceu um erro. Por favor tente mais',
                });
                setLoading(false);
            });
    }

    useEffect(() => {
        setRecPass((r: TypeRecoverPasswordFormik) => ({  ...r, email }));
    }, [email]);

    return (
        <Formik enableReinitialize initialValues={recPassValues} onSubmit={handleRecoverPasswordSubmit} validationSchema={recoverPasswordValidations}>
            {({ handleChange, handleSubmit, values, errors, submitCount }) => (
            <form onSubmit={handleSubmit} className="d-flex justify-content-center flex-column text-center">
                <FormFieldset
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    error={Boolean(errors.email)}
                    showError={Boolean(submitCount)}
                    onChange={handleChange}
                    disabled={true}
                    />
                <FormFieldset
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Nova senha"
                    value={values.password}
                    error={Boolean(errors.password)}
                    showError={Boolean(submitCount)}
                    onChange={handleChange}
                    />
                <FormFieldset
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    placeholder="Redigite a senha"
                    value={values.password_confirmation}
                    error={Boolean(errors.password_confirmation)}
                    showError={Boolean(submitCount)}
                    onChange={handleChange}
                    />
                <StyledSubmitButton isLoading={false} type="submit">
                    {false ? '...Carregando' : 'Alterar'}
                </StyledSubmitButton>
            </form>
            )}
        </Formik>
    )
}