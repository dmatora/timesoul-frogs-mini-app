import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import WebApp from '@twa-dev/sdk';

import '@fontsource/geologica';
import '@fontsource/geologica/500.css';
import '@fontsource/geologica/600.css';
import '@fontsource/geologica/700.css';

import App from './app/app';

const handleResizeDelayed = () => {
  setTimeout(() => {
    document.documentElement.style.setProperty(
      '--scale',
      (document.documentElement.clientWidth / 1080).toString()
    );
  }, 10);
};

const handleResize = () => {
  document.documentElement.style.setProperty(
    '--scale',
    (document.documentElement.clientWidth / 1080).toString()
  );
};

window.addEventListener('resize', handleResizeDelayed);
handleResize();
handleResizeDelayed();
WebApp.ready();
WebApp.expand();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
