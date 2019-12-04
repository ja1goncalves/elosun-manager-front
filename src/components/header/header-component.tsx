import React from 'react';
import { StyledHeader } from './header-styles';
import { NavLinkComponent } from './nav-link';
import { ProfilePictureComponent } from './profile-picture';
import { faSolarPanel, faLightbulb, faSeedling, faUser } from '@fortawesome/free-solid-svg-icons';

export default () => {
    return (
        <StyledHeader>
            <div className="container-fluid h-100 d-flex flex-column">
                <nav className="row d-flex justify-content-center mt-2 mb-4">
                    <p
                        style={{ fontSize: '1.6rem' }}
                        className="ml-3 mb-0"
                    >
                        <b>Elo</b>sun
                    </p>
                </nav>
                {/* <hr style={{ backgroundColor: '#aaa' }} className="w-100 text-secondary" /> */}
                <aside className="row d-flex align-items-center justify-content-start flex-column">
                    <ProfilePictureComponent imgUrl={require('../../assets/imgs/link.jpg')} />
                    <div className="d-flex flex-column align-items-center mt-2">
                        <p style={{ fontSize: 12 }} className="mb-0 text-center">
                            Nome doidão ae<br/>
                            <b>Administrador</b>
                        </p>
                    </div>
                </aside>
                <hr style={{ backgroundColor: '#aaa' }} className="w-100" />
                <nav className="row">
                    <ul className="container-fluid h-100">
                        <NavLinkComponent
                            routeName="Home"
                            toUrl="/home"
                            icon={faUser}
                        />
                        <NavLinkComponent
                            routeName="Anael"
                            toUrl="/anael"
                            icon={faSeedling}
                        />
                        <NavLinkComponent
                            routeName="Compradores"
                            toUrl="/purchasers"
                            icon={faLightbulb}
                        />
                        <NavLinkComponent
                            routeName="Vendedores"
                            toUrl="/sellers"
                            icon={faSolarPanel}
                        />
                    </ul>
                </nav>
            </div>
        </StyledHeader>
    )
}