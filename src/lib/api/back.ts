import { postBackApi } from './call';

export const postStart = async () => {
  return postBackApi('start').then((response) => response.data);
};

export const postSubscribe = async (channel: 'telegram' | 'x') => {
  return postBackApi('subscribe-to', { channel });
};

export const postCard = async (card_id: string) => {
  const body = { card_id };
  return postBackApi('user/cards', body);
};

export const postLevel = async (level: number) => {
  const body = { level };
  return postBackApi('user/level', body);
};
