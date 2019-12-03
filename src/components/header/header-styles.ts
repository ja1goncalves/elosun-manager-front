import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    height: 50px;
    background-color: ${({ theme }) => theme.blue.terciaryColor};
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
    li {
        float: left;
    }
`;