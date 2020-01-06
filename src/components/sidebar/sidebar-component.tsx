import React, { useEffect, useState, useContext } from 'react';
import { StyledSidebar, StyledCloseSidebarIcon } from './sidebar-styles';
import { ProfilePictureComponent } from '../header-left/profile-picture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Redirect, useHistory } from 'react-router';
import { NavMenuComponent } from './nav-menu';
import { StyledLogoNav } from '../header-left/header-styles';
import { HeaderUpContext } from '../header-up/header-up-context';

export default () => {
    const { openSideMenu, setOpenSideMenu } = useContext(HeaderUpContext);
    const history = useHistory();

    const [sidebarWidth, setSidebarWidth] = useState<number>(0);

    const logoffUser = () => {
        localStorage.removeItem('auth');
        history.push('/login');
    }

    useEffect(() => {
        const sidebar = document.getElementById('sidebar-mobile');

        if (sidebar) {
            setSidebarWidth(sidebar.offsetWidth);
            window.addEventListener('resize', () => {
                setSidebarWidth(sidebar.offsetWidth);
            })
        }
    }, []);

    return (
        <StyledSidebar id="sidebar-mobile" sidebarWidth={sidebarWidth} showSideBar={openSideMenu} className="d-block d-lg-none position-fixed">
            <div className="container-fluid h-100 d-flex flex-column">
                <StyledLogoNav className="row d-flex justify-content-center align-items-center">
                    <StyledCloseSidebarIcon
                        onClick={() => setOpenSideMenu(false)}
                        icon={faArrowLeft} />
                    <p className="ml-3 mb-0 logo-text">
                        <b>Elo</b>sun
                    </p>
                </StyledLogoNav>
                <hr style={{ backgroundColor: '#aaa' }} className="w-100 mt-0" />
                <aside className="row d-flex align-items-center justify-content-start flex-column">
                    <ProfilePictureComponent imgUrl={require('../../assets/imgs/link.jpg')} />
                    <div className="d-flex flex-column align-items-center mt-2">
                        <p style={{ fontSize: 12 }} className="mb-0 text-center">
                            Valdery Alves Paes Jr<br/>
                            <b>Administrador</b>
                        </p>
                    </div>
                </aside>
                <hr style={{ backgroundColor: '#aaa' }} className="w-100" />
                <nav className="row">
                    <NavMenuComponent setShowSidebar={setOpenSideMenu} />
                </nav>
                <hr style={{ backgroundColor: '#aaa' }} className="w-100" />
                <nav className="container-fluid">
                    <ul className="row d-flex justify-content-center">
                        <li className="row w-100 d-flex justify-content-start align-items-center flex-row p-2 mx-0" onClick={logoffUser}>
                            <FontAwesomeIcon className="mr-3" icon={faSignOutAlt} /> Sair
                        </li>
                    </ul>
                </nav>
            </div>
        </StyledSidebar>
    )
}