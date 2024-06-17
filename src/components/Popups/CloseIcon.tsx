import styled from 'styled-components';

const CloseIcon = styled((props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="84" height="83" viewBox="0 0 84 83" fill="none" {...props}>
    <circle cx="44" cy="43" r="40" fill="#222625" />
    <circle cx="40" cy="40" r="40" fill="#98E703" />
    <path d="M26 26L54 54" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M27 54L55 26" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
))`
  position: absolute;
  right: 70px;
  top: 70px;
`;

export default CloseIcon;
