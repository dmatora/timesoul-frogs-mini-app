import React from 'react';
import styled from 'styled-components';
import Row from '../../../Row';
import { Dish } from '../../../../contexts/FrogsContext';
import { useTranslation } from 'react-i18next';
import LockedIcon from '../../Mine/Card/LockedIcon';
import { compactAmount } from '../../../../lib/utils';
import Coin from '../../../Status/Coin';

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
`;

const Title = styled.div<{ special: boolean }>`
  font-size: 29px;
  text-align: ${({ special }) => (special ? 'center' : 'left')};
  padding-right: ${({ special }) => (special ? '' : '20px')};
`;

const ProfitLabel = styled.div<{ active: boolean }>`
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
  border-radius: 80px;
  opacity: ${({ locked }) => (locked ? 0.4 : 1)};
  flex-shrink: 0;
`;

const FoodCardHeader = ({ dish }: { dish: Dish }) => {
  const { t } = useTranslation();
  const special = false;

  return (
    <Container special={special}>
      <Row gap={'30px'} style={{ flexDirection: special ? 'column' : 'row', justifyContent: 'left' }}>
        {dish.isBlockedBy && <LockedIcon special={special} />}
        <Icon
          locked={!!dish.isBlockedBy}
          alt="Card Icon"
          src={dish.isBlockedBy ? dish.coverNaUrl : dish.coverUrl}
          special={special}
        />
        <div>
          <Title special={special}>{dish.name}</Title>
          <Row
            gap={'5px'}
            style={{ justifyContent: special ? 'center' : 'left', filter: !dish.isBlockedBy ? '' : 'grayscale(100%)' }}
            margin={'10px 0 0'}
          >
            <ProfitLabel active={true}>{t('food.bonus')}</ProfitLabel>
            <Coin />
            <ProfitValue active={true}>+{compactAmount(dish.bonus, 0)}</ProfitValue>
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default FoodCardHeader;
