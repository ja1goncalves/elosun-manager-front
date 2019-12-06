import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoadIcon = styled(FontAwesomeIcon)`
    position: absolute;
    font-size: 2rem;
    z-index: 2;
    animation: ${rotate} 1.5s linear infinite;
`