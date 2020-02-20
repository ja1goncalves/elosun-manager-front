import React from 'react';
import { faSolarPanel, faLightbulb, faSeedling, faUser, faMoneyBillWave, faHome } from '@fortawesome/free-solid-svg-icons';
import { NavLinkComponent } from '../../header-left/nav-link';
import { NavMenuProps } from './nav-menu-types';

export default ({ setShowSidebar }: NavMenuProps) => {
    return (
        <ul className="container-fluid h-100">
            <NavLinkComponent
                routeName="Dashboard"
                toUrl="/dashboard"
                icon={faHome}
                setShowSidebar={setShowSidebar}
            />
            <NavLinkComponent
                routeName="Distribuidores"
                toUrl="/distributors"
                icon={faSeedling}
                setShowSidebar={setShowSidebar}
            />
            <NavLinkComponent
                routeName="Lead Clientes"
                toUrl="/lead-purchasers"
                icon={faLightbulb}
                setShowSidebar={setShowSidebar}
            />
            <NavLinkComponent
                routeName="Lead Fornecedores"
                toUrl="/lead-sellers"
                icon={faSolarPanel}
                setShowSidebar={setShowSidebar}
            />
            <NavLinkComponent
                routeName="Clientes"
                toUrl="/purchasers"
                icon={faLightbulb}
                setShowSidebar={setShowSidebar}
            />
            <NavLinkComponent
                routeName="Fornecedores"
                toUrl="/sellers"
                icon={faSolarPanel}
                setShowSidebar={setShowSidebar}
            />

            {/* <NavLinkComponent
                routeName="ANEEL"
                toUrl="/aneel"
                icon={faBurn}
                setShowSidebar={setShowSidebar}
            /> */}
            {/* <NavLinkComponent
                routeName="Pagamentos"
                toUrl="/orders"
                icon={faMoneyBillWave}
                setShowSidebar={setShowSidebar}
            /> */}

            <NavLinkComponent
                routeName="Usuários"
                toUrl="/users"
                icon={faUser}
                setShowSidebar={setShowSidebar}
            />
            
        </ul>
    )
}