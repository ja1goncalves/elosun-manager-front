import styled from 'styled-components';

export const StyledUpHeader = styled.header`
    z-index: 1;
    top: 0;
    right: 0;
    width: 120%;
    color: ${({ theme }) => theme.blue.terciaryColor};
    height: 60px;
    box-shadow: 3px 1px 5px 2px #aaa;
    background-color: #fff;
`

export const StyledLogOffButton = styled.div`
    cursor: pointer;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: thin solid #aaa;
`;