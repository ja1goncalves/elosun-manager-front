import React, { useState } from 'react';
import { StyledUpHeader, StyledLogOffButton } from './header-up-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router';

export default () => {
    const [goToLogin, setGoToLogin] = useState<boolean>(false);
    const logoffUser = () => {
        localStorage.removeItem('auth');
        setGoToLogin(true);
    }

    const openMenu = () => {
        console.log('abre o menu')
    }

    return (
        <>
            {goToLogin && <Redirect to="/login" />}
            <StyledUpHeader className="row d-flex justify-content-end align-items-center p-3 mb-4">
                <FontAwesomeIcon
                    style={{ fontSize: '2rem', cursor: 'pointer' }}
                    className="d-flex d-lg-none"
                    icon={faAlignJustify}
                    onClick={openMenu} />
                <StyledLogOffButton
                    className="d-none d-lg-flex justify-content-center align-items-center p-3"
                    title="Sair"
                    onClick={logoffUser}>
                    <FontAwesomeIcon icon={faPowerOff} />
                </StyledLogOffButton>
            </StyledUpHeader>
        </>
    )
}