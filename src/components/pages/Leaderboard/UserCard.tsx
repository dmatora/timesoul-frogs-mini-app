import React from 'react';
import styled from 'styled-components';
import { Leader } from '../../../contexts/FrogsContext';
import Row from '../../Row';
import Coin from '../../Status/Coin';
import { useTranslation } from 'react-i18next';
import UserIcon from '../../UserIcon';

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

const UserCard = ({ user, place }: { user: Leader; place: number }) => {
  const { t } = useTranslation();
  const name = user.displayAs || `${t('system.user')} ${user.id}`;

  return (
    <Container>
      <Row spread={true} style={{ width: '100%' }}>
        <Row gap="58px">
          <UserIcon />
          <div>
            <Name>{name}</Name>
            <Row style={{ justifyContent: 'left' }}>
              <Coin />
              <Balance>{user.balance.toLocaleString('en-US').replace(/,/g, ' ')}</Balance>
            </Row>
          </div>
        </Row>
        <Row>
          <Place>{place}</Place>
        </Row>
      </Row>
    </Container>
  );
};

export default UserCard;
