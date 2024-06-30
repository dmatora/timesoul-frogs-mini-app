import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Row from '../../Row';
import Popup from '../Popup';
import { useFrogs } from '../../../contexts/FrogsContext';
import { isHungryEvent } from '../../../lib/events';
import { useNavigate } from 'react-router-dom';

const Header = styled.div`
  text-align: center;
  font-size: 70px;
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

const Hungry = () => {
  const { event } = useFrogs();
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (!isHungryEvent(event)) throw new Error('Should not happen');

  return (
    <Popup close={t('system.continue')} onConfirm={async () => navigate('/food')}>
      <Row>
        <img alt="bored" src="/img/frog/hungry.png" style={{ marginTop: '-50px' }} />
      </Row>
      <Header>{t('popup_Hungry.header')}</Header>
      <Row margin="70px 0">
        <Text>
          {t('popup_Hungry.message')}
          <br />
          <br />
          {t('popup_Hungry.description')}
        </Text>
      </Row>
    </Popup>
  );
};

export default Hungry;
