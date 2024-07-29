import styled from 'styled-components';

const ButtonContainer = styled.div<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#98e703' : 'black')};
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 70px;
  width: 145px;
  height: 140px;
`;

export default ButtonContainer;
