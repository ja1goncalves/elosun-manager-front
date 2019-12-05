import styled from 'styled-components';

export const StyledLoginPage = styled.div`
    background-color: ${({ theme }) => theme.blue.terciaryColor};
    width: 100vw;
    height: 100vh;
`;

export const StyledLoginBox = styled.div`
    border-radius: 5px;
    margin: 0 10px;
    height: 350px;
    background-color: #fff;
    padding: 20px;
`;