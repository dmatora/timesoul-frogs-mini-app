import LevelUp from './Events/LevelUp';
import BalanceUp from './Events/BalanceUp';
import { useFrogs } from '../../contexts/FrogsContext';
import CheckingCard from './Events/CheckingCard';

const Popups = () => {
  const { event } = useFrogs();
  if (!event) return;
  if (event.type === 'levelUp') return <LevelUp />;
  if (event.type === 'balanceUp') return <BalanceUp />;
  if (event.type === 'checkingCard') return <CheckingCard />;
};

export default Popups;
