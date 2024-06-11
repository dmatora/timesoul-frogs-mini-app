import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  width: 170px;
  height: 170px;
  background-color: #98e703;
  border-radius: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 6px 0 0 black;
  border: none;
  flex-shrink: 0;
  &:active {
    position: relative;
    box-shadow: none;
    top: 6px;
    left: 5px;
  }
`;

const ClipIcon = styled.div`
  border: 2px solid black;
  width: 65px;
  height: 65px;
  background-color: #98e703;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 8px -8px 0 0 black;
`;

const ClipboardButton: React.FC = () => {
  return (
    <Container>
      <ClipIcon />
    </Container>
  );
};

export default ClipboardButton;
