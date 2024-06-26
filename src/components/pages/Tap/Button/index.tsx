import { useFrogs } from '../../../../contexts/FrogsContext';
import { useRef, useState } from 'react';
import TapsAnimated from '../../../TapsAnimated';
import Bronze from './Bronze';
import Silver from './Silver';
import Gold from './Gold';
import Platinum from './Platinum';
import Diamond from './Diamond';
import Epic from './Epic';
import Legendary from './Legendary';
import Master from './Master';
import Grandmaster from './Grandmaster';

const FrogButtonImage = ({ shaking, onPointerUp }: { shaking: boolean; onPointerUp: () => void }) => {
  const { level } = useFrogs();
  const images = [null, Bronze, Silver, Gold, Platinum, Diamond, Epic, Legendary, Master, Grandmaster];
  const Image = images[level];

  if (!Image) throw new Error('Should not happen');

  return <Image shaking={shaking} onPointerUp={onPointerUp} />;
};

const FrogButton = () => {
  const { handleTap } = useFrogs();
  const [shaking, setShaking] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePointerUp = () => {
    handleTap();
    setShaking(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setShaking(false);
      timeoutRef.current = null;
    }, 200);
  };

  return (
    <TapsAnimated>
      <FrogButtonImage shaking={shaking} onPointerUp={handlePointerUp} />
    </TapsAnimated>
  );
};

export default FrogButton;

document.addEventListener('touchstart', () => null); // Necessary for onTouchStart to work
