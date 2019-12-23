import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
    color: #fff;
    transition: background-color 0.3s;
    border-radius: 6px;
    padding: 10px;
    :hover {
        color: inherit;
        text-decoration: none;
        background-color: ${({ theme }) => theme.blue.primaryColor};
    }
    &.active {
        background-color: #fff;
        color: ${({ theme }) => theme.blue.terciaryColor};
    }
`;