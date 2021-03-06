import React, { useState, useEffect } from 'react';
import { StyledLoginPage, StyledLoginBox, StyledParagraphLink } from './login-styles';
import { LoginForm } from './login-form';
import { TypeLoginFormik } from './login-form/login-form-types';
import { TypeSelectedForm } from './login-types';
import { TypeForgotPasswordFormik } from './forgot-password/forgot-password-types';
import { ForgotPasswordForm } from './forgot-password';
import { LoadIcon } from '../../components/load-icon';
import { useHistory } from 'react-router-dom';
import { notify } from '../../utils/app.utils';
import { AuthService } from '../../services/auth';

export default () => {
    const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
    const [selectedForm, setSelectedForm] = useState<TypeSelectedForm>('login');
    const authService = new AuthService();

    const history = useHistory();

    const handleLoginSubmit = (formik: TypeLoginFormik) => {
        setLoadingSubmit(true);
        authService.loginUser(formik)
            .then(res => {
                setLoadingSubmit(false);
                history.push('dashboard');
            })
            .catch(err => {
                notify({
                    type: 'error',
                    message: 'Login ou senha errados',
                });
                setLoadingSubmit(false);
            });
    }

    const handleForgotPasswordSubmit = (formik: TypeForgotPasswordFormik) => {
        setLoadingSubmit(true);
        authService.sendEmailForgotPassword(formik.login)
            .then(res => {
                notify({
                    type: 'success',
                    message: 'Sucesso! Verifique seu e-mail e siga os passos para alterar a senha',
                });
                setLoadingSubmit(false);
            })
            .catch(err => {
                notify({
                    type: 'error',
                    message: 'Email não encontrado',
                });
                setLoadingSubmit(false);
            });
    }

    useEffect(() => {
        const handleInit = (): void => {
            if (authService.isLogged()) {
                history.push('dashboard');
            }
        }

        // If the user is logged, then he's redirected to dashboard
        handleInit();
    }, [authService, history]);

    return (
        <StyledLoginPage className="d-flex justify-content-center align-items-center">
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