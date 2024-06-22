import { getBackApi, patchBackApi, postBackApi } from './call';

export const getFriends = async () => {
  return getBackApi('friends').then((response) => response.data);
};

export const getLeaderboard = async () => {
  return getBackApi('leaderboard').then((response) => response.data);
};

export const getUserCards = async () => {
  return getBackApi('user/cards').then((response) => response.data);
};

export const getUserTasks = async () => {
  return getBackApi('user/tasks').then((response) => response.data);
};

export const patchUserTasks = async (task_id: string) => {
  return patchBackApi('user/tasks', { task_id }).then((response) => response.data);
};

export const postStart = async (invited_by: number | undefined) => {
  return postBackApi('start', invited_by ? { invited_by } : undefined).then((response) => response.data);
};

export const postCard = async (card_id: number) => {
  const body = { card_id };
  return postBackApi('user/cards', body).then((response) => response.data);
};

export const postLevel = async (level: number) => {
  const body = { level };
  return postBackApi('user/level', body);
};
