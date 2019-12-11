import React, { useState } from 'react';
import { StyledUpHeader, StyledLogOffButton } from './header-up-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { SidebarComponent } from '../sidebar';
import { useHistory } from 'react-router-dom';
import { AuthService } from '../../services/auth';

export default () => {
    const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);

    const authService = new AuthService();
    const history = useHistory();

    const logoffUser = async () => {
        await authService.logout();
        history.push('login');
    }

    const openSidebarMenu = async () => {
        await setOpenSideMenu(false);
        await setOpenSideMenu(true);
    }

    return (
        <>
            <StyledUpHeader className="row d-flex justify-content-end align-items-center p-3 mb-4 position-fixed">
                <FontAwesomeIcon
                    style={{ fontSize: '2rem', cursor: 'pointer' }}
                    className="d-flex d-lg-none mr-3"
                    icon={faAlignJustify}
                    onClick={openSidebarMenu} />
                <StyledLogOffButton
                    className="d-none d-lg-flex justify-content-center align-items-center p-3 mr-3"
                    title="Sair"
                    onClick={logoffUser}>
                    <FontAwesomeIcon icon={faPowerOff} />
                </StyledLogOffButton>
            </StyledUpHeader>
            <SidebarComponent show={openSideMenu} />
        </>
    )
}