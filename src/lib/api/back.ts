import { postBackApi } from './call';

export const postStart = async () => {
  return postBackApi('start').then((response) => response.data);
};
