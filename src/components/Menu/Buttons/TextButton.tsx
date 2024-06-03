import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#98e703' : 'black')};
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 60px;
  padding: 0 20px;
  height: 105px;
`;

const ButtonLabel = styled.div<{ active: boolean; marginTop: number }>`
  color: ${({ active }) => (active ? 'black' : 'white')};
  font-family: Geologica, sans-serif;
  font-weight: 500;
  letter-spacing: 0;
  text-align: center;
  font-size: 35px;
  margin-top: ${({ marginTop }) => `${marginTop}px`};
`;

const MineButton = ({ active = false, label = '' }) => {
  return (
    <ButtonContainer active={active}>
      <ButtonLabel active={active} marginTop={0}>
        {label}
      </ButtonLabel>
    </ButtonContainer>
  );
};

export default MineButton;
