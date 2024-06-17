import React from 'react';
import Coin from '../../Status/Coin';
import Row from '../../Row';
import Popup from '../Popup';
import styled from 'styled-components';
import { useFrogs } from '../../../contexts/FrogsContext';
import { useTranslation } from 'react-i18next';

const Header = styled.div`
  text-align: center;
  font-size: 81px;
  font-weight: 500;
  margin: 25px 0 70px;
`;

const Text = styled.div`
  color: #262626;
  text-align: center;
  font-size: 35px;
  font-weight: 600;
`;

const LevelUp = () => {
  const { event } = useFrogs();
  const { t } = useTranslation();

  return (
    <Popup>
      <Row>
        <Coin size={'large'} />
      </Row>
      <Header>{t('popup_levelUp.levelUp')}</Header>
      <Row spread={true} margin="70px">
        <Text>
          {t('popup_levelUp.multiTap')}
          <br />+{event?.earnPerTapGain}
        </Text>
        <Text>
          {t('popup_levelUp.energyLimit')}
          <br />+ {event?.maxEnergyGain}
        </Text>
      </Row>
    </Popup>
  );
};

export default LevelUp;
