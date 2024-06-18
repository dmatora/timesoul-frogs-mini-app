import React, { useState } from 'react';
import styled from 'styled-components';
import Row from '../../../Row';
import { Card as CardType, useFrogs } from '../../../../contexts/FrogsContext';
import CardHeader from './CardHeader';
import Coin from '../../../Status/Coin';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 26px;
  font-weight: 400;
`;

const CardLevel = styled.div`
  width: 193px;
  height: 105px;

  border-radius: 37px;
  background: white;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BuyButton = styled.button<{ buying: boolean }>`
  width: 285px;
  height: 105px;
  border: none;
  font-size: 26px;

  background-color: #98e703;
  border-radius: 37px;
  box-shadow: 5px 6px 0 0 #262626;

  visibility: ${({ disabled, buying }) => (disabled && !buying ? 'hidden' : 'visible')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ buying }) =>
    !buying &&
    `
  &:active {
    position: relative;
    box-shadow: none;
    top: 6px;
    left: 5px;
  }
  `};

  ${({ buying }) =>
    buying &&
    `
  &::after {
    content: '.';
    display: inline-block;
    margin-left: 8px;
    animation: dots 1.5s infinite;
  }

  @keyframes dots {
    0%,
    20% {
      content: '.';
    }
    40% {
      content: '..';
    }
    60% {
      content: '...';
    }
    80%,
    100% {
      content: '';
    }
  }
  `};
`;

const Card = ({ card, special = false }: { card: CardType; special?: boolean }) => {
  const [buying, setBuying] = useState(false);
  const { buyCard, userCards } = useFrogs();
  const { t } = useTranslation();
  const userCard = userCards.find((userCard) => userCard.card_id === card.id);
  const cardLevel = userCard?.level_number || 0;
  const cardNextLevel = card.levels.find((level) => level.number === cardLevel + 1);

  const handleOnClick = async () => {
    setBuying(true);
    await buyCard(card.id);
    setBuying(false);
  };

  return (
    <Container>
      <CardHeader card={card} cardLevel={cardLevel} special={special} />
      <Row gap={'6px'}>
        <CardLevel>
          {t('system.level')} {cardLevel}
        </CardLevel>
        <BuyButton onClick={handleOnClick} buying={buying} disabled={buying || !cardNextLevel}>
          {!buying && cardNextLevel && (
            <Row gap={'5px'}>
              <Coin />
              {cardNextLevel?.price}
            </Row>
          )}
        </BuyButton>
      </Row>
    </Container>
  );
};

export default Card;
