import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import WebApp from '@twa-dev/sdk';
import { handleResize } from './lib/utils';

import '@fontsource/geologica';
import '@fontsource/geologica/500.css';
import '@fontsource/geologica/600.css';
import '@fontsource/geologica/700.css';

import App from './app/app';
import { postBalance } from './lib/api';

window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);
window.addEventListener('load', handleResize);

WebApp.ready();
WebApp.setBackgroundColor('#000');
WebApp.setHeaderColor('#000');
WebApp.expand();
WebApp.BackButton.show();

WebApp.onEvent('backButtonClicked', async () => {
  setTimeout(() => {
    WebApp.close();
  }, 1000);
  await postBalance();
  WebApp.close();
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
