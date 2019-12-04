import styled from 'styled-components';

export const StyledHeader = styled.header`
    height: 100vh;
    background-color: ${({ theme }) => theme.blue.terciaryColor};
    width: 15%;
    color: #fff;

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