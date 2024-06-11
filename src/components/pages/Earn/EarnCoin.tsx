import styled from 'styled-components';
import React from 'react';
import Coin from '../../Status/Coin';

const Container = styled.div`
  position: relative;
  height: 445px;
  width: 635px;
  margin: 0 auto;
`;

const YellowStarIcon = styled(({ large = false, ...props }) => (
  <svg width="89" height="90" viewBox="0 0 89 90" fill="none" {...props}>
    <path
      d="M44.45 88.5499C39.11 61.3899 37.25 57.5199 34.77 54.2799C31.52 51.7999 27.65 49.9399 0.5 44.5999C27.66 39.2499 31.53 37.3999 34.77 34.9199C37.25 31.6699 39.11 27.7999 44.45 0.649902C49.8 27.8099 51.65 31.6699 54.13 34.9199C57.38 37.3999 61.25 39.2599 88.4 44.5999C61.24 49.9499 57.38 51.7999 54.13 54.2799C51.65 57.5299 49.79 61.3999 44.45 88.5499Z"
      fill="#FABD32"
      stroke="#070707"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
))`
  position: absolute;

  top: ${({ large }) => (large ? '285px' : '60px')};
  left: ${({ large }) => (large ? '0' : 'auto')};
  right: ${({ large }) => (large ? 'auto' : '0')};
  width: ${({ large }) => (large ? '88px' : '56px')};
  height: ${({ large }) => (large ? '88px' : '56px')};
`;

const EarnCoin: React.FC = () => {
  return (
    <Container>
      <YellowStarIcon large={true} />
      <YellowStarIcon />
      <Coin size="large" />
    </Container>
  );
};

export default EarnCoin;
