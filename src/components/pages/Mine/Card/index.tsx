import React, { useState } from 'react';
import styled from 'styled-components';
import Row from '../../../Row';
import { useFrogs, UserCard } from '../../../../contexts/FrogsContext';
import CardHeader from './CardHeader';
import { useTranslation } from 'react-i18next';
import Coin from '../../../Status/Coin';
import { compactAmount } from '../../../../lib/utils';

const Container = styled.div<{ locked: boolean }>`
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

const Requirement = styled.div`
  text-align: center;
  width: 460px;
  min-height: 75px;
  padding: 15px;
  background-color: white;
  border-radius: 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BuyButton = styled.button<{ buying: boolean }>`
  width: 285px;
  height: 105px;
  border: none;
  font-size: 26px;

  background-color: #98e703;
  border-radius: 37px;
  box-shadow: 5px 6px 0 0 #262626;

  filter: ${({ disabled, buying }) => (disabled && !buying ? 'grayscale(100%)' : '')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ disabled, buying }) =>
    !disabled &&
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

const Card = ({ card, special = false }: { card: UserCard; special?: boolean }) => {
  const [buying, setBuying] = useState(false);
  const { balance, buyCard, userCards } = useFrogs();
  const { t } = useTranslation();

  const getCardName = (cardId: number) => {
    return userCards.find((card) => card.id === cardId)?.name;
  };
  const handleOnClick = async () => {
    setBuying(true);
    await buyCard(card);
    setBuying(false);
  };

  return (
    <Container locked={!!card.isBlockedBy}>
      <CardHeader card={card} special={special} />
      <Row gap={'6px'} style={{ justifyContent: 'left' }}>
        {!card.isBlockedBy && (
          <>
            <CardLevel>
              {t('system.level')} {card.level}
            </CardLevel>
            {card.nextLevelPrice && (
              <BuyButton onClick={handleOnClick} buying={buying} disabled={buying || card.nextLevelPrice > balance}>
                {!buying && card.nextLevelPrice && (
                  <Row gap={'5px'}>
                    <Coin />
                    {compactAmount(card.nextLevelPrice)}
                  </Row>
                )}
              </BuyButton>
            )}
          </>
        )}
        {card.isBlockedBy && (
          <Requirement>
            {card.isBlockedBy &&
              card.isBlockedBy.moreFriendsCount &&
              `${t('system.friends')} (${card.isBlockedBy.moreFriendsCount})`}
            {card.isBlockedBy &&
              !card.isBlockedBy.moreFriendsCount &&
              `${getCardName(card.isBlockedBy.cardId)} (${t('system.level')} ${card.isBlockedBy.cardLevel})`}
          </Requirement>
        )}
      </Row>
    </Container>
  );
};

export default Card;
