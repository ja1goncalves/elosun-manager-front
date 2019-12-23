import React from 'react';
import { faSolarPanel, faLightbulb, faSeedling, faUser, faLayerGroup, faMoneyBillWave, faBurn } from '@fortawesome/free-solid-svg-icons';
import { NavLinkComponent } from '../../header-left/nav-link';
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
                routeName="Anael"
                toUrl="/anael"
                icon={faBurn}
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
            <NavLinkComponent
                routeName="Estoque"
                toUrl="/stocks"
                icon={faLayerGroup}
                setShowSidebar={setShowSidebar}
            />
            <NavLinkComponent
                routeName="Pagamentos"
                toUrl="/orders"
                icon={faMoneyBillWave}
                setShowSidebar={setShowSidebar}
            />
        </ul>
    )
}