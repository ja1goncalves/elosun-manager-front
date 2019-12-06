import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { StyledLoginPage, StyledLoginBox, StyledParagraphLink } from './login-styles';
import { LoginForm } from './login-form';
import { TypeLoginFormik } from './login-form/login-form-types';
import { TypeSelectedForm } from './login-types';
import { TypeForgotPasswordFormik } from './forgot-password/forgot-password-types';
import { ForgotPasswordForm } from './forgot-password';
import { LoadIcon } from '../../components/load-icon';

export default () => {
    const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
    const [logged, setLogged] = useState<boolean>(false);
    const [selectedForm, setSelectedForm] = useState<TypeSelectedForm>('login');

    // TODO: Adicionar requisição para se logar
    const handleLoginSubmit = (formik: TypeLoginFormik) => {
        console.log('formik: ', formik);
        setLoadingSubmit(true);
        localStorage.setItem('auth', '213rsdzcr44cv4vtrrtdf');
        setLogged(true);
    }

    // TODO: Adicionar requisição para recuperar a senha
    const handleForgotPasswordSubmit = (formik: TypeForgotPasswordFormik) => {
        console.log('formik: ', formik);
        setLoadingSubmit(true);
    }

    return (
        <StyledLoginPage className="d-flex justify-content-center align-items-center">
            {logged && <Redirect to="/home" />}

            <StyledLoginBox loadingSubmit={loadingSubmit} className="d-flex justify-content-center flex-column text-center">
                <h1 className="mb-4 mt-3">Elosun</h1>
                <LoadIcon loading={loadingSubmit} style={{ left: '49%', top: '48%' }} />
                {selectedForm === 'login' && (
                    <>
                        <LoginForm
                            handleLoginSubmit={handleLoginSubmit}
                            loadingSubmit={loadingSubmit}
                            />
                        <StyledParagraphLink
                            className="m-0 mt-auto justify-self-end"
                            onClick={() => setSelectedForm('forgotpassword')}>Esqueci a senha</StyledParagraphLink>
                    </>
                )}
                {selectedForm === 'forgotpassword' && (
                    <>
                        <ForgotPasswordForm
                            handleForgotPasswordSubmit={handleForgotPasswordSubmit}
                            loadingSubmit={loadingSubmit}
                            />
                        <StyledParagraphLink
                            className="m-0 mt-auto justify-self-end"
                            onClick={() => setSelectedForm('login')}>Tem um cadastro? entre na sua conta</StyledParagraphLink>
                    </>
                )}
            </StyledLoginBox>
        </StyledLoginPage>
    )
}