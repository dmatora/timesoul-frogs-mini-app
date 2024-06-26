import { useFrogs } from '../../../../contexts/FrogsContext';
import React, { useRef, useState } from 'react';
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
import ImagePreloader from '../../../ImagePreloader';
import PreventScroll from '../../../PreventScroll';

const FrogButtonImage = ({ shaking, onPointerUp }: { shaking: boolean; onPointerUp: () => void }) => {
  const { level } = useFrogs();
  const images = [null, Bronze, Silver, Gold, Platinum, Diamond, Epic, Legendary, Master, Grandmaster];
  const nextImages = [
    [],
    ['/img/frog/2.silver.png'],
    ['/img/frog/3.gold.png'],
    ['/img/frog/4.platinum.png'],
    ['/img/frog/5.diamond.png'],
    ['/img/frog/6.epic.png'],
    ['/img/frog/7.legendary.png'],
    ['/img/frog/8.master.png', '/img/frog/background/8.master.png'],
    ['/img/frog/9.grandmaster.png', '/img/frog/background/9.grandmaster.png'],
    [],
  ];
  const Image = images[level];

  if (!Image) throw new Error('Should not happen');

  return (
    <PreventScroll>
      <ImagePreloader images={nextImages[level]} />
      <Image shaking={shaking} onPointerUp={onPointerUp} />
    </PreventScroll>
  );
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
