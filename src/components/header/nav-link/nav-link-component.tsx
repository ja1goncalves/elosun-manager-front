import React from 'react';
import { NavLinkComponentProps } from './nav-link-types';
import { StyledNavLink } from './nav-link-styles';

export default ({ routeName, toUrl }: NavLinkComponentProps) => (
    <li className="col-2">
        <StyledNavLink
            activeClassName="active"
            className="d-flex align-items-center justify-content-center w-100 h-100" 
            to={toUrl}>
            {routeName}
        </StyledNavLink>
    </li>
)