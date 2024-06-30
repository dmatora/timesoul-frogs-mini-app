import styled from 'styled-components';
import React from 'react';
import Row from '../../../Row';
import { useFrogs } from '../../../../contexts/FrogsContext';
import Progress from '../Progress';
import { useTranslation } from 'react-i18next';

export const LevelValue = styled.div`
  color: #262626;
  font-size: 37px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SatietyLevel = () => {
  const { satietyProgress } = useFrogs();
  const { t } = useTranslation();

  return (
    <>
      <Row margin={'40px 48px 0'} spread={true}>
        <LevelValue>{t('food.hungry')}</LevelValue>
        <LevelValue>{t('food.full')}</LevelValue>
      </Row>
      <Row margin={'0 40px'}>
        <Progress progress={satietyProgress} />
      </Row>
    </>
  );
};

export default SatietyLevel;
