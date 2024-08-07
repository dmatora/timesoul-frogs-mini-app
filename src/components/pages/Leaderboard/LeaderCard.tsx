import React from 'react';
import styled from 'styled-components';
import { Leader } from '../../../contexts/FrogsContext';
import Row from '../../Row';
import Coin from '../../Status/Coin';
import { useTranslation } from 'react-i18next';
import UserIcon from '../../UserIcon';
import { amountWithSpaces, filterSpecialCharacters } from '../../../lib/utils';

const Container = styled.div`
  height: 156px;
  width: 860px;
  border-radius: 78px;
  background: white;
  padding: 0 70px;
  display: flex;
  margin: 10px auto;
  align-items: center;
`;

const Name = styled.div`
  //margin-left: 22px;
  margin-bottom: 12px;
  font-size: 40px;

  & a {
    color: black;
  }
`;

const Balance = styled.div`
  margin-left: 5px;
  font-size: 40px;
`;

const Place = styled.div`
  font-size: 80px;
  opacity: 0.5;
`;

const LeaderCard = ({ user, place, length = 100 }: { user: Leader; place?: number; length?: number }) => {
  const { t } = useTranslation();
  const name = user.displayAs || `${t('system.user')} ${user.id}`;

  return (
    <Container>
      <Row spread={true} style={{ width: '100%' }}>
        <Row gap="58px">
          <UserIcon />
          <div>
            <Name>{filterSpecialCharacters(name)}</Name>
            <Row style={{ justifyContent: 'left' }}>
              <Coin />
              <Balance>{amountWithSpaces(user.balance)}</Balance>
            </Row>
          </div>
        </Row>
        <Row>
          <Place>{place ? place : `${length}+`}</Place>
        </Row>
      </Row>
    </Container>
  );
};

export default LeaderCard;
