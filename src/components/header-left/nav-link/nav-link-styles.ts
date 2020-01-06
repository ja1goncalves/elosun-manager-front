import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
    color: #fff;
    transition: background-color 0.3s;
    border-radius: 6px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;

    :hover {
        color: inherit;
        text-decoration: none;
        background-color: ${({ theme }) => theme.blue.primaryColor};
    }
    &.active {
        background-color: #fff;
        color: ${({ theme }) => theme.blue.terciaryColor};
    }
    .sidebar-icon-container {
        width: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;