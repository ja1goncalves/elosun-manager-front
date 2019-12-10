import React from 'react';
import { NavLinkComponentProps } from './nav-link-types';
import { StyledNavLink } from './nav-link-styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ routeName, toUrl, icon, setShowSidebar }: NavLinkComponentProps) => (
    <li className="row w-100 d-flex justify-content-start align-items-center flex-row p-2 mx-0">
        <StyledNavLink
            activeClassName="active"
            className="w-100 h-100"
            onClick={() => setShowSidebar && setShowSidebar(false)}
            to={toUrl}>
            <FontAwesomeIcon className="mr-3" icon={icon} />
            {routeName}
        </StyledNavLink>
    </li>
)