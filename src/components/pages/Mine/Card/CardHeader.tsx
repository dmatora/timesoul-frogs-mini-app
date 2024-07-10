import React from 'react';
import styled from 'styled-components';
import Row from '../../../Row';
import Coin from '../../../Status/Coin';
import { useFrogs, UserCard } from '../../../../contexts/FrogsContext';
import { useTranslation } from 'react-i18next';
import { compactAmount } from '../../../../lib/utils';
import LockedIcon from './LockedIcon';

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
  padding: ${({ special }) => (special ? '40px 0' : '10px 0')};
  
  &:active {
    background: #98e703;
  }
`;

const Title = styled.div<{ special: boolean }>`
  font-size: 29px;
  text-align: ${({ special }) => (special ? 'center' : 'left')};
  padding-right: 20px;
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

const Icon = styled.img<{ locked: boolean; special: boolean }>`
  margin-left: ${({ special }) => (special ? '' : '20px')};
  width: ${({ special }) => (special ? '490px' : '160px')};
  height: ${({ special }) => (special ? '490px' : '160px')};
  border-radius: 80px;
  opacity: ${({ locked }) => (locked ? 0.4 : 1)};
  flex-shrink: 0;
`;

const CardHeader = ({ card, special }: { card: UserCard; special: boolean }) => {
  const { t } = useTranslation();
  const { setEvent } = useFrogs();
  const active = card.level > 0;

  const handleOnClick = async () => {
    setEvent({ type: 'checkingCard', card });
  };

  return (
    <Container special={special} onClick={handleOnClick}>
      <Row gap={'30px'} style={{ flexDirection: special ? 'column' : 'row', justifyContent: 'left' }}>
        {card.isBlockedBy && <LockedIcon special={special} />}
        <Icon
          locked={!!card.isBlockedBy}
          alt="Card Icon"
          src={card.isBlockedBy ? card.coverNaUrl : card.coverUrl}
          special={special}
        />
        <div>
          <Title special={special}>{card.name}</Title>
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
            <ProfitValue active={active}>
              +{compactAmount(card.level ? card.profitPerHour : card.nextLevelProfitPerHour)}
            </ProfitValue>
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default CardHeader;
