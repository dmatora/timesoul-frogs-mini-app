import React from 'react';
import styled from 'styled-components';
import Row from '../../../Row';
import Coin from '../../../Status/Coin';
import { Card } from '../../../../contexts/FrogsContext';
import { useTranslation } from 'react-i18next';
import { compactAmount } from '../../../../lib/utils';

const Container = styled.div<{ special: boolean }>`
  min-height: 208px;
  width: 490px;
  margin-bottom: 5px;
  border-radius: 47px;
  background: white;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: ${({ special }) => (special ? 'center' : '')};
  padding: ${({ special }) => (special ? '40px 0' : '')};
`;

const Title = styled.div<{ special: boolean }>`
  font-size: 30px;
  text-align: ${({ special }) => (special ? 'center' : 'left')};
`;

const ProfitLabel = styled.div<{ active: boolean; special?: boolean }>`
  margin-top: ${({ special }) => (special ? '' : '25px')};
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

const CardHeader = ({ card, cardLevel, special }: { card: Card; cardLevel: number; special: boolean }) => {
  const { t } = useTranslation();
  const cardCurrentLevel = card.levels.find((level) => level.number === (cardLevel || 1));
  const active = cardLevel > 0;

  return (
    <Container special={special}>
      <Row gap={'30px'} style={{ flexDirection: special ? 'column' : 'row' }}>
        <Icon alt="Card Icon" src={card.coverUrl} />
        <div>
          <Title special={special}>{card.title}</Title>
          {cardCurrentLevel && (
            <>
              {!special && <ProfitLabel active={active}>{t('system.profitPerHour')}</ProfitLabel>}
              <Row
                gap={'5px'}
                style={{ justifyContent: 'left', filter: active ? '' : 'grayscale(100%)' }}
                margin={'10px 0 0 -15px'}
              >
                {special && (
                  <ProfitLabel active={active} special={true}>
                    {t('system.profitPerHour')}
                  </ProfitLabel>
                )}
                <Coin />
                <ProfitValue active={active}>+{compactAmount(cardCurrentLevel?.profitPerHour)}</ProfitValue>
              </Row>
            </>
          )}
        </div>
      </Row>
    </Container>
  );
};

export default CardHeader;
