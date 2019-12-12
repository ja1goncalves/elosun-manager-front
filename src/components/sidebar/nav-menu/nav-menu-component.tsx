import React from 'react';
import { faSolarPanel, faLightbulb, faSeedling, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLinkComponent } from '../../header/nav-link';
import { NavMenuProps } from './nav-menu-types';

export default ({ setShowSidebar }: NavMenuProps) => {
    return (
        <ul className="container-fluid h-100">
            <NavLinkComponent
                routeName="Dashboard"
                toUrl="/dashboard"
                icon={faUser}
                setShowSidebar={setShowSidebar}
            />
            <NavLinkComponent
                routeName="Distribuidores"
                toUrl="/distributors"
                icon={faSeedling}
                setShowSidebar={setShowSidebar}
            />
            <NavLinkComponent
                routeName="Compradores"
                toUrl="/purchasers"
                icon={faLightbulb}
                setShowSidebar={setShowSidebar}
            />
            <NavLinkComponent
                routeName="Vendedores"
                toUrl="/sellers"
                icon={faSolarPanel}
                setShowSidebar={setShowSidebar}
            />
        </ul>
    )
}