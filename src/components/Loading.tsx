import styled, { keyframes } from 'styled-components';

const dotsAnimation = keyframes`
0%,
20% {
    content: '.';
}
40% {
    content: '..';
}
60% {
    content: '...';
}
80%,
100% {
    content: '';
}
`;

const Loading = styled.div<{ fontSize?: string }>`
  margin: 0 auto;
  &::after {
    content: '.';
    display: inline-block;
    animation: ${dotsAnimation} 1.5s infinite;
  }
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '50px')};
`;

export default Loading;
