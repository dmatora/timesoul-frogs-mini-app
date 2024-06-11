import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  position: relative;
  top: -2px;
  left: -2px;
  width: 119px;
  height: 127px;
  background-color: #98e703;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 0 0 black;
  border: none;
  flex-shrink: 0;

  &:active {
    box-shadow: none;
    top: 2px;
    left: 2px;
  }
`;

const OpenIcon = styled((props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="124" height="131" viewBox="0 0 124 131" fill="none" {...props}>
    <path
      d="M51.65 91.9399C51.04 91.9399 50.44 91.7099 49.97 91.2499C49.04 90.3199 49.04 88.8199 49.97 87.8999L71.87 65.9999L50.38 44.5099C49.45 43.5799 49.45 42.0799 50.38 41.1599C51.3 40.2299 52.81 40.2299 53.73 41.1599L76.9 64.3299C77.83 65.2599 77.83 66.7599 76.9 67.6799L53.33 91.2499C52.87 91.7099 52.26 91.9399 51.65 91.9399Z"
      fill="#262626"
    />
  </svg>
))``;

const OpenButton = ({ onClick }: { onClick: () => Promise<void> }) => {
  return (
    <Container onClick={onClick}>
      <OpenIcon />
    </Container>
  );
};

export default OpenButton;
