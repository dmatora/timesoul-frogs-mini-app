import * as ReactDOM from 'react-dom/client';
import WebApp from '@twa-dev/sdk';

import { handleResize } from './lib/utils';

import '@fontsource/geologica';
import '@fontsource/geologica/500.css';
import '@fontsource/geologica/600.css';
import '@fontsource/geologica/700.css';

import App from './app/app';
import { env } from './lib/env';

if (!env.developers.includes(WebApp?.initDataUnsafe?.user?.id?.toString()) && window.location.hash.length > 500)
  window.location.href = `/`;

window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);
window.addEventListener('load', handleResize);

WebApp.ready();
WebApp.setBackgroundColor('#000');
WebApp.setHeaderColor('#000');
WebApp.expand();
WebApp.isClosingConfirmationEnabled = true;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const noScroll = (e: Event) => {
  if (location.pathname === '/') {
    console.log(location.pathname);
    e.preventDefault();
  }
};

window.addEventListener('touchmove', noScroll, { passive: false });

root.render(<App />);
