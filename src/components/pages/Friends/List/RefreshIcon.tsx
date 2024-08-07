import styled, { keyframes } from 'styled-components';
import React from 'react';

export const rotateAnimation = keyframes`
  0% {
      transform: rotate(0deg) scaleY(-1);
  }
  100% {
    transform: rotate(360deg) scaleY(-1);
  }
`;

const RefreshIcon = styled(({ disabled, isLoading, className, ...props }) => (
  <svg
    className={`${isLoading ? 'loading ' : ''} ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    width="61"
    height="61"
    viewBox="0 0 61 61"
    fill="none"
    {...props}
  >
    <path
      d="M26.36 4.19948C33.4 3.25948 40.5601 5.48947 46.1501 10.2195L40.1501 9.45948L43.68 14.0095L53.19 15.2095L54.3901 5.69948L50.86 1.14948L49.9601 8.27948C43.3601 2.06948 34.53 -0.920525 25.82 0.249475C12.37 2.03948 1.55007 13.5995 0.0900678 27.7195C-0.0199322 28.8195 0.780046 29.7995 1.88005 29.9095C1.95005 29.9095 2.02007 29.9195 2.09007 29.9195C3.10007 29.9195 3.97006 29.1495 4.08006 28.1195C5.35006 15.8095 14.71 5.75948 26.35 4.19948H26.36Z"
      fill={disabled ? '#999' : '#262626'}
    />
    <path
      d="M58.3801 32.1294C57.2901 31.9694 56.27 32.7194 56.11 33.8194C54.3 46.0594 44.49 55.6894 32.79 56.7194C25.71 57.3494 18.6601 54.7994 13.2801 49.8294L19.2401 50.8494L15.92 46.1494L6.47003 44.5294L4.85004 53.9794L8.17004 58.6794L9.38007 51.5994C15.1001 57.4794 22.77 60.8094 30.67 60.8094C31.49 60.8094 32.3201 60.7694 33.1401 60.6994C46.6601 59.5094 57.9801 48.4494 60.0601 34.3994C60.2201 33.3094 59.4701 32.2894 58.3701 32.1294H58.3801Z"
      fill={disabled ? '#999' : '#262626'}
    />
  </svg>
))`
  &.loading {
    animation: ${rotateAnimation} 2s infinite linear;
  }
`;

export default RefreshIcon;
