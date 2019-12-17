import React, { useState } from 'react';
import { StyledUpHeader, StyledLogOffButton } from './header-up-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { SidebarComponent } from '../sidebar';
import { HeaderUpContext } from './header-up-context';
import { AuthService } from '../../services/auth';

export default () => {
    const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);
    const authService = new AuthService();

    const logoffUser = async () => {
        await authService.logout();
    }

    return (
        <HeaderUpContext.Provider value={{ openSideMenu, setOpenSideMenu }}>
            <StyledUpHeader className="row d-flex justify-content-end align-items-center p-3 mb-4 position-fixed">
                <FontAwesomeIcon
                    style={{ fontSize: '2rem', cursor: 'pointer' }}
                    className="d-flex d-lg-none mr-3"
                    icon={faAlignJustify}
                    onClick={() => setOpenSideMenu(!openSideMenu)} />
                <StyledLogOffButton
                    className="d-none d-lg-flex justify-content-center align-items-center p-3 mr-3"
                    title="Sair"
                    onClick={logoffUser}>
                    <FontAwesomeIcon icon={faPowerOff} />
                </StyledLogOffButton>
            </StyledUpHeader>
            <SidebarComponent />
        </HeaderUpContext.Provider>
    )
}