import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import WebApp from '@twa-dev/sdk';

import App from './app/app';

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
