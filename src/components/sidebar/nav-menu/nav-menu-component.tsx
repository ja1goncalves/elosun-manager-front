import React from 'react';
import { faSolarPanel, faLightbulb, faSeedling, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLinkComponent } from '../../header/nav-link';

export default () => {
    return (
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
    )
}