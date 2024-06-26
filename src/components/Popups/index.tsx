import LevelUp from './Events/LevelUp';
import BalanceUp from './Events/BalanceUp';
import { useFrogs } from '../../contexts/FrogsContext';
import CheckingCard from './Events/CheckingCard';
import BalanceTip from './Events/BalanceTip';

const Popups = () => {
  const { event } = useFrogs();
  if (!event) return;
  if (event.type === 'levelUp') return <LevelUp />;
  if (event.type === 'balanceUp') return <BalanceUp />;
  if (event.type === 'balanceTip') return <BalanceTip />;
  if (event.type === 'checkingCard') return <CheckingCard />;
};

export default Popups;
