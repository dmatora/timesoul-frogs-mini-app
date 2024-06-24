import { useQuery } from 'react-query';
import { getLeaderboard } from './back';

export const useLeaderboard = (level: number) =>
  useQuery(['leaderboard', level], () => getLeaderboard(level), {
    staleTime: 60000,
  });
