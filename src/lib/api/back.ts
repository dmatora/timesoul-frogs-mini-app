import { getBackApi, postBackApi } from './call';

export const getFriends = async () => {
  return getBackApi('friends').then((response) => response.data);
};

export const getLeaderboard = async () => {
  return getBackApi('leaderboard').then((response) => response.data);
};

export const postStart = async (invited_by: number | undefined) => {
  return postBackApi('start', invited_by ? { invited_by } : undefined).then((response) => response.data);
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
