import React, { useState } from 'react';
import { StyledUpHeader, StyledLogOffButton } from './header-up-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router';

export default () => {
    const [goToLogin, setGoToLogin] = useState<boolean>(false);
    const logoffUser = () => {
        localStorage.removeItem('auth');
        setGoToLogin(true);
    }

    return (
        <>
            {goToLogin && <Redirect to="/login" />}
            <StyledUpHeader className="row d-flex justify-content-end align-items-center p-3 mb-4">
                <StyledLogOffButton className="d-flex justify-content-center align-items-center p-3" title="Sair" onClick={logoffUser} >
                    <FontAwesomeIcon icon={faPowerOff} />
                </StyledLogOffButton>
            </StyledUpHeader>
        </>
    )
}