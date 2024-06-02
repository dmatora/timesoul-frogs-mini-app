import styled from 'styled-components';

const ButtonLabel = styled.div<{ active: boolean; marginTop: number }>`
  color: ${({ active }) => (active ? 'black' : 'white')};
  font-family: Geologica, sans-serif;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;

  @media (min-width: 1080px) {
    font-size: 23px;
    margin-top: ${({ marginTop }) => `${marginTop}px`};
  }

  @media (max-width: 1079px) {
    font-size: 2.129vw;
    margin-top: ${({ marginTop }) => `${marginTop / 10.8}vw`};
  }
`;

export default ButtonLabel;
