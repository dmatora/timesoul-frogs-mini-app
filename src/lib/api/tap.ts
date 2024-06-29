import { getTapApi, postTapApi } from './call';

export const getTapUser = async () => {
  return getTapApi('user');
};

export const sync = async (keys: number) => {
  const fromAt = new Date().toUTCString();
  return postTapApi('time', [{ keys, fromAt }]);
};
