import React, { useState } from 'react';
import styled from 'styled-components';
import Row from '../../../Row';
import { Dish, useFrogs } from '../../../../contexts/FrogsContext';
import FoodCardHeader from './FoodCardHeader';
import { useTranslation } from 'react-i18next';
import Loading from '../../../Loading';

const Container = styled.div<{ locked: boolean }>`
  display: flex;
  flex-direction: column;
  font-size: 26px;
  font-weight: 400;
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

const ConsumeButton = styled.button`
  width: 285px;
  height: 105px;
  border: none;
  font-size: 26px;

  background-color: #98e703;
  border-radius: 37px;
  box-shadow: 5px 6px 0 0 #262626;

  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : '')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ disabled }) =>
    !disabled &&
    `
  &:active {
    position: relative;
    box-shadow: none;
    top: 6px;
    left: 5px;
  };
  `}
`;

const FoodCard = ({ dish }: { dish: Dish }) => {
  const { feedFrog } = useFrogs();
  const [feeding, setFeeding] = useState(false);
  const { t } = useTranslation();

  const handleOnClick = async () => {
    setFeeding(true);
    await feedFrog(dish);
    setFeeding(false);
  };

  return (
    <Container locked={!!dish.isBlockedBy}>
      <FoodCardHeader dish={dish} />
      <Row gap={'6px'} style={{ justifyContent: 'flex-end' }}>
        {!dish.isBlockedBy && (
          <ConsumeButton onClick={handleOnClick}>
            <Row gap={'5px'}>
              {!feeding && t('food.feed')}
              {feeding && <Loading />}
            </Row>
          </ConsumeButton>
        )}
        {dish.isBlockedBy && (
          <Requirement>
            {dish.isBlockedBy &&
              dish.isBlockedBy.moreFriendsCount &&
              `${t('system.friends')} (${dish.isBlockedBy.moreFriendsCount})`}
            {dish.isBlockedBy && dish.isBlockedBy.timeout && t('food.frogIsFull')}
          </Requirement>
        )}
      </Row>
    </Container>
  );
};

export default FoodCard;
