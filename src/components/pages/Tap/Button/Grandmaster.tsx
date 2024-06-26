import styled from 'styled-components';
import { shakeAnimation } from './shakeAnimation';

const Grandmaster = styled(({ shaking, ...props }) => (
  <svg {...props} width="3900" height="3187" viewBox="0 0 3900 3187" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="background">
      <image width="3900" height="3187" xlinkHref="/img/frog/background/9.grandmaster.png" />
    </g>

    <g id="frog" className={shaking ? 'shaking' : ''}>
      <image x="921" y="316" width="1308" height="2701" xlinkHref="/img/frog/9.grandmaster.png" />
    </g>
  </svg>
))`
  flex-shrink: 0;
  margin: 60px -3px 60px auto;
  width: 1003px;
  height: 820px;

  .shaking {
    transform-origin: 1575px 1666px;
    animation: ${shakeAnimation} 0.2s infinite;
  }
`;

export default Grandmaster;
