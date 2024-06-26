import { keyframes } from 'styled-components';

export const shakeAnimation = keyframes`
    0% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(2px, 1px) rotate(1deg); }
    50% { transform: translate(-2px, -1px) rotate(-1deg); }
    75% { transform: translate(1px, 2px) rotate(0.5deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
`;
