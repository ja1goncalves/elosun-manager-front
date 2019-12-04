import styled, { css } from 'styled-components';
import { SubmitButtonProps } from './submit-button-types';

export const StyledSubmitButton = styled.button<SubmitButtonProps>`
    background-color: ${({ theme }) => theme.blue.terciaryColor};
    border: none;
    color: #fff;
    padding: 8px 20px;
    border-radius: 5px;
    cursor: pointer;
    ${({ isLoading }) => isLoading &&
        css`
            user-select: none;
            opacity: 0.8;
            cursor: not-allowed !important;
        `
    }
    :focus {
        outline: none;
    }
`;