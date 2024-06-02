import styled from 'styled-components';

const ButtonContainer = styled.div<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#98e703' : 'black')};
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1080px) {
    border-radius: 70px;
    width: 145px;
    height: 140px;
  }

  @media (max-width: 1079px) {
    border-radius: 6.481vw;
    width: 13.425vw;
    height: 12.962vw;
  }
`;

export default ButtonContainer;
