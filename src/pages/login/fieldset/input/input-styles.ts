import styled, { css } from 'styled-components';
// import MaskedInput from 'react-text-mask';
import { TypeInputForm } from './input-types';

export const StyledInputForm = styled.input<TypeInputForm>`
    ${({ error }) => error &&
        css`
            border-color: red;
        `
    }
    :focus {
        outline: none;
    }
`;