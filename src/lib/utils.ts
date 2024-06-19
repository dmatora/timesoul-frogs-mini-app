import WebApp from '@twa-dev/sdk';

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
