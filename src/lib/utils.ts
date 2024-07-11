import WebApp from '@twa-dev/sdk';
import { env } from './env';

const { isProd } = env;

declare global {
  interface Window {
    ym: any;
    initializedAt: Date;
    isLocalHost: boolean;
  }
}

export const getLevelName = (level: number) => {
  const names = [
    '',
    'Bronze',
    'Silver',
    'Gold',
    'Platinum',
    'Diamond',
    'Epic',
    'Legendary',
    'Master',
    'Grandmaster',
    'Lord',
  ];
  return names[level];
};

export const getLeaderboardImage = (level: number) =>
  `/img/frog/leaderboard/${level}.${getLevelName(level).toLowerCase()}.png`;

export const amountWithSpaces = (balance: number) => {
  if (!balance) return '0';
  return Math.round(balance).toLocaleString('en-US').replace(/,/g, ' ');
};

export const compactAmount = (price: number, fractionDigits = 2) => {
  if (price >= 1000000000000) return `${parseFloat((price / 1000000000000).toFixed(fractionDigits))}T`;
  if (price >= 1000000000) return `${parseFloat((price / 1000000000).toFixed(fractionDigits))}B`;
  if (price >= 1000000) return `${parseFloat((price / 1000000).toFixed(fractionDigits))}M`;
  if (price >= 1000) return `${parseFloat((price / 1000).toFixed(fractionDigits))}K`;
  return price.toFixed();
};

export const filterSpecialCharacters = (input: string): string => {
  return input.replace(/[^\p{L}\p{N}\s.,!?-]/gu, '');
};

export const shouldBlockDesktop = () => {
  const isMobile = ['android', 'android_x', 'ios'].indexOf(WebApp.platform) >= 0;

  return !isMobile && isProd;
};

export const getTgUserId = () => {
  return WebApp.initDataUnsafe?.user?.id;
};

export const getInvitedBy = () => {
  if (!WebApp?.initDataUnsafe?.user || !WebApp?.initDataUnsafe?.start_param) return undefined;
  const startParam = Number(WebApp.initDataUnsafe.start_param);
  if (WebApp.initDataUnsafe.user.id === startParam) return undefined;
  return startParam;
};

export const handleResize = () => {
  const scale = document.documentElement.clientWidth > 1080 ? 1 : document.documentElement.clientWidth / 1080;
  document.documentElement.style.setProperty('--scale', scale.toString());
};

export const metrikaEventAppStarted = (userId: number) => {
  if (window.isLocalHost === false) {
    window.ym(97804594, 'reachGoal', 'appStarted', {
      initializedAt: window.initializedAt.toString(),
      loadingTimeMs: Date.now() - window.initializedAt.getTime(),
      userId,
    });

    window.ym(97804594, 'params', {
      initializedAt: window.initializedAt.toString(),
      loadingTimeMs: Date.now() - window.initializedAt.getTime(),
      userId,
    });
  }
};
export const metrikaEventAppCrashed = () => {
  if (window.isLocalHost === false) {
    window.ym(97804594, 'reachGoal', 'appCrashed', {
      initializedAt: window.initializedAt.toString(),
      loadingTimeMs: Date.now() - window.initializedAt.getTime(),
    });
  }
};
