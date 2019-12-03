import styled from 'styled-components';

export const StyledLoginPage = styled.div`
    background-color: ${({ theme }) => theme.blue.terciaryColor};
    width: 100vw;
    height: 100vh;
`;

export const StyledLoginForm = styled.form`
    border-radius: 5px;
    min-width: 300px;
    background-color: #fff;
    padding: 20px;
`;