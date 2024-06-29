import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Row from '../../Row';
import Popup from '../Popup';
import { useFrogs } from '../../../contexts/FrogsContext';
import { isBoredEvent } from '../../../lib/events';

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

const Bored = () => {
  const { event } = useFrogs();
  const { t } = useTranslation();

  if (!isBoredEvent(event)) throw new Error('Should not happen');

  return (
    <Popup close={t('system.continue')}>
      <Row>
        <img alt="bored" src="/img/frog/bored.png" style={{ marginTop: '100px' }} />
      </Row>
      <Header>{t('popup_Bored.header')}</Header>
      <Row margin="70px">
        <Text>
          {t('popup_Bored.message')}
          <br />
          <br />
          {t('popup_Bored.description')}
        </Text>
      </Row>
    </Popup>
  );
};

export default Bored;
