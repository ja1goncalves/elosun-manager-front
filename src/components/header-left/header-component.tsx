import React, { useEffect, useState } from 'react';
import { StyledHeader, StyledLogoNav } from './header-styles';
import { ProfilePictureComponent } from './profile-picture';
import { NavMenuComponent } from '../sidebar/nav-menu';
import { getObjectCookie, USER_DATA_COOKIE } from '../../utils/app.utils';
import { UserKeyState } from './header-types';

export default () => {
    const [user, setUser] = useState<UserKeyState>({ name: '', email: '' });
    useEffect(() => {
        const userData = getObjectCookie(USER_DATA_COOKIE);
        if (userData) {
            setUser({
                name: userData.name,
                email: userData.email,
            })
        }
    }, []);

    return (
        <StyledHeader className="d-none d-lg-block position-fixed">
            <div className="container-fluid h-100 d-flex flex-column">
                <StyledLogoNav className="row d-flex justify-content-center align-items-center">
                    <p className="ml-3 mb-0 logo-text">
                        <b>Elo</b>sun
                    </p>
                </StyledLogoNav>
                <hr style={{ backgroundColor: '#aaa' }} className="w-100 text-secondary mt-0" />
                <aside className="row d-flex align-items-center justify-content-start flex-column">
                    <ProfilePictureComponent imgUrl={require('../../assets/imgs/link.jpg')} />
                    <div className="d-flex flex-column align-items-center mt-2">
                        <p style={{ fontSize: 12 }} className="mb-0 text-center">
                            {user.name}<br/>
                            <b>{user.email}</b>
                        </p>
                    </div>
                </aside>
                <hr style={{ backgroundColor: '#aaa' }} className="w-100" />
                <nav className="row">
                    <NavMenuComponent />
                </nav>
            </div>
        </StyledHeader>
    )
} 