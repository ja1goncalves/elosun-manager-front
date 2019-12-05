import styled, { css } from 'styled-components';
import { SidebarStyleProps } from './sidebar-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledSidebar = styled.aside<SidebarStyleProps>`
    z-index: 2;
    height: 100vh;
    width: 90vw;
    background-color: ${({ theme }) => theme.blue.terciaryColor};
    color: #fff;
    top: 0;
    left: ${window.screen.width}px;
    transition: left 0.3s;

    ${({ showSideBar, sidebarWidth }) => showSideBar &&
        css`
            left: ${window.screen.width - sidebarWidth}px;
        `
    }
    ul, li {
        padding: 0;
        list-style: none;
        white-space: nowrap;
    }
    ul {
        white-space: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar;
    }
`;

export const StyledCloseSidebarIcon = styled(FontAwesomeIcon)`
    position: absolute;
    top: 24px;
    left: 16px;
`;