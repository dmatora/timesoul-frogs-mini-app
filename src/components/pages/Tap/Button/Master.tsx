import styled from 'styled-components';
import { shakeAnimation } from './shakeAnimation';

const Master = styled(({ shaking, ...props }) => (
  <svg {...props} width="4101" height="3438" viewBox="0 0 4101 3438" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="background">
      <image width="4101" height="3438" xlinkHref="/img/frog/background/8.master.png" />
    </g>

    <g id="frog" className={shaking ? 'shaking' : ''}>
      <image x="1172" y="787" width="1282" height="2495" xlinkHref="/img/frog/8.master.png" />
    </g>
  </svg>
))`
  flex-shrink: 0;
  margin: 60px auto 60px -80px;
  width: 978px;
  height: 820px;

  .shaking {
    transform-origin: 1813px 2034px;
    animation: ${shakeAnimation} 0.2s infinite;
  }
`;

export default Master;
