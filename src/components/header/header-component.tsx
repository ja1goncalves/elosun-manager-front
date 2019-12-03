import React from 'react';
import { StyledHeader } from './header-styles';
import { NavLinkComponent } from './nav-link';
import { ProfilePictureComponent } from './profile-picture';

export default () => {
    return (
        <StyledHeader className="container-fluid mb-4">
            <div className="row h-100">
                <nav className="col-2 d-flex align-items-center">
                    <p
                        style={{ fontSize: '1.6rem' }}
                        className="ml-3 mb-0"
                    >
                        Elosun
                    </p>
                </nav>
                <nav className="col-8">
                    <ul className="row h-100">
                        <NavLinkComponent
                            routeName="Home"
                            toUrl="/home"
                        />
                        <NavLinkComponent
                            routeName="Anael"
                            toUrl="/anael"
                        />
                        <NavLinkComponent
                            routeName="Compradores"
                            toUrl="/purchasers"
                        />
                        <NavLinkComponent
                            routeName="Vendedores"
                            toUrl="/sellers"
                        />
                    </ul>
                </nav>
                <aside className="col-2 d-flex align-items-center justify-content-end flex-row">
                    <ProfilePictureComponent imgUrl={require('../../assets/imgs/link.jpg')} />
                    <div className="ml-3 d-flex flex-column align-items-center">
                        <p style={{ fontSize: 12 }} className="mb-0">
                            Nome doidão ae<br/>
                            <b>Administrador</b>
                        </p>
                    </div>
                </aside>
            </div>
        </StyledHeader>
    )
}