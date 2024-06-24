import { useQuery } from 'react-query';
import { getLeaderboard } from './back';

export const useLeaderboard = () =>
  useQuery(['leaderboard'], () => getLeaderboard(), {
    staleTime: 60000,
  });
