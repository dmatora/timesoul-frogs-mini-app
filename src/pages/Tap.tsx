import React, { useEffect, useState } from 'react';
import Status from '../components/Status';
import FrogButton from '../components/FrogButton';
import Row from '../components/Row';
import BoostIcon from '../components/pages/Tap/BoostIcon';
import BoostCard from '../components/pages/Tap/BoostCard';
import PageContainer from '../components/PageContainer';
import { EnergyIcon, EnergyValue } from '../components/pages/Tap/Energy';
import Progress from '../components/pages/Tap/Progress';
import {
  ArrowIcon,
  LevelCard,
  LevelValue,
} from '../components/pages/Tap/Level';

const Tap: React.FC = () => {
  const maxEnergy = 1000;
  const [coins, setCoins] = useState(0);
  const [energy, setEnergy] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEnergy((prevEnergy) =>
        prevEnergy < maxEnergy ? prevEnergy + 1 : maxEnergy
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleClick = () => {
    if (energy > 0) {
      setCoins((prevCoins) => prevCoins + 1);
      setEnergy((prevEnergy) => prevEnergy - 1);
    }
  };

  return (
    <PageContainer minHeight={'1806px'}>
      <Status coins={coins} />
      <Row margin={'0 48px'} spread={true}>
        <LevelCard>
          Бронзовый <ArrowIcon />
        </LevelCard>
        <LevelValue>Уровень 1/9</LevelValue>
      </Row>
      <Row margin={'0 40px'}>
        <Progress />
      </Row>
      <FrogButton onClick={handleClick} />
      <Row spread={true} margin={'0 48px 118px'}>
        <Row gap={'10px'}>
          <EnergyIcon />
          <EnergyValue>
            {energy} / {maxEnergy}
          </EnergyValue>
        </Row>
        <BoostCard>
          <BoostIcon />
          Ускорение
        </BoostCard>
      </Row>
    </PageContainer>
  );
};

export default Tap;
