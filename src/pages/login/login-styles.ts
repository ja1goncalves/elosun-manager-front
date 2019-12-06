import styled, { css } from 'styled-components';
import { StyledLoginBoxProps } from './login-types';

export const StyledLoginPage = styled.div`
    background-color: ${({ theme }) => theme.blue.terciaryColor};
    width: 100vw;
    height: 100vh;
`;

export const StyledLoginBox = styled.div<StyledLoginBoxProps>`
    border-radius: 5px;
    width: 90%;
    max-width: 330px;
    height: 350px;
    background-color: #fff;
    padding: 20px;

    ${({ loadingSubmit }) => loadingSubmit && 
        css`
            opacity: 0.8;
            pointer-events: none;
        `
    }
`;

export const StyledParagraphLink = styled.p`
    color: #007bff;
    cursor: pointer;
    :hover {
        text-decoration: underline;
    }
`;