import React, { useEffect, useState } from 'react';
import { AuthService } from '../../services/auth';
import { StyledLoginPage, StyledLoginBox } from '../login/login-styles';
import { LoadIcon } from '../../components/load-icon';
import { RecoverFormComponent } from './recover-form';

export default () => {
    const [email, setEmail] = useState<string>('');
    const [token, setToken] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const [authService] = useState(new AuthService());

    useEffect(() => {
        const { href } = window.location;
        // Coleta o token por path variable
        const tokenFromUrl = href.match(/[^/]*$/);
        
        if (tokenFromUrl) {
            const [tokenStr] = tokenFromUrl;
            setToken(tokenStr);
            authService.getEmailForgotPassword(tokenStr)
                .then(({ email }) => {
                    setEmail(email);
                })
                .catch(_ => {
                    window.location.href = '/login';
                });
        } else {
            window.location.href = '/login';
        }

    }, [authService]);

    return (
        <StyledLoginPage className="d-flex justify-content-center align-items-center">
            <StyledLoginBox loadingSubmit={loading} className="d-flex justify-content-center flex-column text-center">
                <h1 className="mb-4 mt-3">Elosun</h1>
                <LoadIcon loading={loading} style={{ left: '49%', top: '48%' }} />
                <RecoverFormComponent setLoading={setLoading} token={token} email={email} />
            </StyledLoginBox>
        </StyledLoginPage>
    )
}