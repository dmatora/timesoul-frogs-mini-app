import styled from 'styled-components';

const ButtonLabel = styled.div<{ active: boolean; marginTop: number }>`
  color: ${({ active }) => (active ? 'black' : 'white')};
  font-family: Geologica, sans-serif;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  font-size: 23px;
  margin-top: ${({ marginTop }) => `${marginTop}px`};
`;

export default ButtonLabel;
