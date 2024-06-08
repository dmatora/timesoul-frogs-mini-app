import React from 'react';
import styled from 'styled-components';
import Row from '../../../Row';
import Coin from '../../../Status/Coin';
import { Card } from '../../../../contexts/FrogsContext';

const Container = styled.div`
  height: 208px;
  width: 490px;
  margin-bottom: 5px;
  border-radius: 47px;
  background: white;
  font-weight: 400;
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  font-size: 30px;
`;

const ProfitLabel = styled.div<{ active: boolean }>`
  margin-top: 25px;
  font-size: 26px;
  color: ${({ active }) => (active ? 'black' : 'gray')};
`;

const ProfitValue = styled.div<{ active: boolean }>`
  font-size: 26px;
  color: ${({ active }) => (active ? 'black' : 'gray')};
`;

const Icon = styled.img`
  margin-left: 20px;
  height: 160px;
  width: 160px;
  border-radius: 80px;
`;

const CardHeader = ({ card, cardLevel }: { card: Card; cardLevel: number }) => {
  const cardCurrentLevel = card.levels.find((level) => level.number === (cardLevel || 1));
  const active = cardLevel > 0;

  return (
    <Container>
      <Row gap={'30px'}>
        <Icon alt="Card Icon" src={card.coverUrl} />
        <div>
          <Title>{card.title}</Title>
          {cardCurrentLevel && (
            <>
              <ProfitLabel active={active}>Прибыль в час</ProfitLabel>
              <Row
                gap={'5px'}
                style={{ justifyContent: 'left', filter: active ? '' : 'grayscale(100%)' }}
                margin={'10px 0 0 -15px'}
              >
                <Coin />
                <ProfitValue active={active}>+{cardCurrentLevel?.profitPerHour}</ProfitValue>
              </Row>
            </>
          )}
        </div>
      </Row>
    </Container>
  );
};

export default CardHeader;
