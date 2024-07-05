import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import Coin from '../../Status/Coin';
import Row from '../../Row';
import Popup from '../Popup';
import { useFrogs } from '../../../contexts/FrogsContext';
import { amountWithSpaces } from '../../../lib/utils';
import { isCheckingCardEvent } from '../../../lib/events';

const Header = styled.div`
  text-align: center;
  font-size: 81px;
  font-weight: 500;
  margin-bottom: 60px;
`;

const Text = styled.div`
  color: #262626;
  text-align: center;
  font-size: 35px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 500;
    &.cardProfitPerHourIncrease {
      margin-top: 10px;
      margin-bottom: 70px;
    }
    &.cardNextLevelPrice {
      scale: 1.5;
    }
  }
`;

const CheckingCard = () => {
  const { event, buyCard, balance } = useFrogs();
  const { t } = useTranslation();

  if (!isCheckingCardEvent(event)) throw new Error('Should not happen');

  return (
    <Popup
      close={t('system.continue')}
      onConfirm={() => buyCard(event.card)}
      confirmDisabled={event.card.nextLevelPrice > balance}
    >
      <Row>
        <img alt="card" src={event.card.coverUrl} />
      </Row>
      <Header>{event.card.name}</Header>
      <Row>
        <Text>{event.card.description}</Text>
      </Row>
      <Row>
        <Text>
          {t('system.profitPerHour')}
          <br />
          <span className="cardProfitPerHourIncrease">
            <Coin size={'small'} />+{amountWithSpaces(event.card.nextLevelProfitPerHour - event.card.profitPerHour)}
          </span>
          <span className="cardNextLevelPrice">
            <Coin size={'small'} />
            {amountWithSpaces(event.card.nextLevelPrice)}
          </span>
        </Text>
      </Row>
    </Popup>
  );
};

export default CheckingCard;
