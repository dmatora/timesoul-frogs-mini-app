import styled from 'styled-components';
import React from 'react';
import Row from '../../Row';
import BoostCard from './BoostCard';
import BoostIcon from './BoostIcon';
import { useFrogs } from '../../../contexts/FrogsContext';
import { useTranslation } from 'react-i18next';

export const EnergyIcon = styled((props) => (
  <svg width="60" height="58" viewBox="0 0 60 58" fill="none" {...props}>
    <g clipPath="url(#clip0_2063_3052)">
      <path
        d="M29.83 0C27 0 24.47 1.58 23.22 4.11L18.75 13.16C18.28 14.12 17.36 14.79 16.3 14.94L6.32001 16.39C3.53001 16.79 1.25001 18.71 0.370012 21.4C-0.509988 24.09 0.210012 26.98 2.23001 28.96L9.46001 36C10.23 36.75 10.58 37.82 10.4 38.88L8.69001 48.82C8.32001 50.97 8.91001 53.15 10.31 54.8C11.72 56.48 13.78 57.44 15.96 57.44C17.14 57.44 18.33 57.14 19.39 56.58L28.32 51.89C28.78 51.65 29.3 51.52 29.83 51.52C30.36 51.52 30.88 51.65 31.34 51.89L40.28 56.59C41.36 57.16 42.51 57.44 43.71 57.44C45.88 57.44 47.94 56.48 49.36 54.8C50.76 53.15 51.35 50.96 50.98 48.82L49.27 38.87C49.09 37.82 49.44 36.74 50.2 36L57.43 28.96C59.46 26.98 60.17 24.09 59.29 21.4C58.42 18.71 56.14 16.79 53.34 16.39L43.35 14.94C42.29 14.79 41.38 14.12 40.91 13.16L36.44 4.11C35.19 1.58 32.66 0 29.83 0Z"
        fill="#262626"
      />
    </g>
    <defs>
      <clipPath id="clip0_2063_3052">
        <rect width="59.65" height="57.45" fill="white" />
      </clipPath>
    </defs>
  </svg>
))``;

export const EnergyValue = styled.div`
  color: #262626;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  min-width: 207px;
  text-align: right;
`;

export const Energy = () => {
  const { config, balance, energy, earnPerTap, maxEnergy, level, nextLevelPrice, setEvent } = useFrogs();
  const { t } = useTranslation();

  const handleOnClick = () => {
    const nextLevel = config.levels?.find((item) => item.number === level + 1);
    if (!nextLevel) {
      throw new Error('Should not happen');
    }

    setEvent({
      type: 'levelUp',
      maxEnergyGain: nextLevel.energyLimit - maxEnergy,
      earnPerTapGain: nextLevel.earnPerTap - earnPerTap,
    });
  };

  return (
    <Row spread={true} margin={'0 48px 118px'}>
      <Row gap={'10px'}>
        <EnergyIcon />
        <EnergyValue>
          {energy.toFixed()} / {maxEnergy}
        </EnergyValue>
      </Row>
      {nextLevelPrice && (
        <BoostCard onClick={handleOnClick} disabled={!nextLevelPrice || balance < nextLevelPrice}>
          <BoostIcon />
          {t('system.level')} {level + 1}
        </BoostCard>
      )}
    </Row>
  );
};
