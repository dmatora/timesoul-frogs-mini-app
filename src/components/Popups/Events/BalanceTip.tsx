import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Coin from '../../Status/Coin';
import Row from '../../Row';
import Popup from '../Popup';
import { useFrogs } from '../../../contexts/FrogsContext';
import { isBalanceTipEvent } from '../../../lib/events';

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
  display: flex;
  flex-direction: column;
`;

const BalanceTip = () => {
  const { event } = useFrogs();
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (!isBalanceTipEvent(event)) throw new Error('Should not happen');

  return (
    <Popup close={t('system.continue')} onConfirm={async () => navigate('/mine/activities')}>
      <Row>
        <Coin size={'large'} />
      </Row>
      <Header>{t('popup_BalanceTip.tip')}</Header>
      <Row margin="70px">
        <Text>
          {t('popup_BalanceTip.message')}
          <br />
          <br />
          {t('popup_BalanceTip.description')}
        </Text>
      </Row>
    </Popup>
  );
};

export default BalanceTip;
