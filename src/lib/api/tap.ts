import { postTapApi } from './call';

export const sync = async (keys: number) => {
  const fromAt = new Date().toUTCString();
  return postTapApi('time', [{ keys, fromAt }]);
};
