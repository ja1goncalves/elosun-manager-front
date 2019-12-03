import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { StyledLoginPage, StyledLoginForm } from './login-styles';
import { FormFieldset } from './fieldset';
import { formValidations } from './login-validations';
import { Formik } from 'formik';
import { TypeLoginFormik } from './login-types';
import { StyledSubmitButton } from './submit-button';

export default () => {
    const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
    const [logged, setLogged] = useState<boolean>(false);
    const [initialFormikValues] = useState<TypeLoginFormik>({
        login: '',
        password: ''
    });

    const handleSubmit = (formik: TypeLoginFormik) => {
        console.log('formik: ', formik);
        // localStorage.setItem('auth', '213rsdzcr44cv4vtrrtdf');
        // setLogged(true);
    }

    return (
        <StyledLoginPage className="d-flex justify-content-center align-items-center">
            {logged && <Redirect to="/home" />}


            <Formik initialValues={initialFormikValues} onSubmit={handleSubmit} validationSchema={formValidations}>
                {({ handleChange, handleSubmit, values, errors, submitCount }) => (
                <StyledLoginForm onSubmit={handleSubmit} className="d-flex justify-content-center flex-column text-center">
                    <h1 className="mb-4 mt-3">Elosun</h1>
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
                    <StyledSubmitButton loading={loadingSubmit} type="submit">
                        {loadingSubmit ? '...Carregando' : 'Acessar'}
                    </StyledSubmitButton>
                    <a className="mt-4" href="#">Esqueci a senha</a>
                </StyledLoginForm>
                )}
            </Formik>
        </StyledLoginPage>
    )
}