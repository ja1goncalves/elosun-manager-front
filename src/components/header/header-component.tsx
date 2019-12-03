import React from 'react';
import { StyledHeader } from './header-styles';
import { NavLinkComponent } from './nav-link';

export default () => {
    return (
        <StyledHeader className="row">
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
            <aside className="col-2 d-flex align-items-center justify-content-end">
                <p className="mb-0 mr-3">Ícone</p>
            </aside>
        </StyledHeader>
    )
}