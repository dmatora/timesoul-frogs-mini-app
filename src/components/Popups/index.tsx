import LevelUp from './Events/LevelUp';
import BalanceUp from './Events/BalanceUp';
import { useFrogs } from '../../contexts/FrogsContext';
import CheckingCard from './Events/CheckingCard';
import CheckingTask from './Events/CheckingTask';
import BalanceTip from './Events/BalanceTip';
import Bored from './Events/Bored';
import Hungry from './Events/Hungry';

const Popups = () => {
  const { event } = useFrogs();
  if (!event) return;
  if (event.type === 'levelUp') return <LevelUp />;
  if (event.type === 'balanceUp') return <BalanceUp />;
  if (event.type === 'balanceTip') return <BalanceTip />;
  if (event.type === 'bored') return <Bored />;
  if (event.type === 'hungry') return <Hungry />;
  if (event.type === 'checkingCard') return <CheckingCard />;
  if (event.type === 'checkingTask') return <CheckingTask />;
};

export default Popups;
