import React from 'react';
import styled from 'styled-components';
import { Friend } from '../../../../contexts/FrogsContext';
import Row from '../../../Row';
import Coin from '../../../Status/Coin';
import { useTranslation } from 'react-i18next';
import UserIcon from '../../../UserIcon';

const Container = styled.div`
  height: 156px;
  width: 890px;
  border-radius: 78px;
  background: white;
  padding: 0 55px;
  display: flex;
  margin: 10px auto;
  align-items: center;
`;

const Name = styled.div`
  margin-left: 22px;
  font-size: 40px;

  & a {
    color: black;
  }
`;

const Bonus = styled.div`
  margin-left: 5px;
  font-size: 40px;
`;

const FriendCard = ({ friend }: { friend: Friend }) => {
  const { t } = useTranslation();
  const name = friend.displayAs || `${t('system.user')} ${friend.id}`;

  return (
    <Container>
      <Row spread={true} style={{ width: '100%' }}>
        <Row>
          <UserIcon />
          <Name>{name}</Name>
        </Row>
        <Row>
          <Coin />
          <Bonus>+{friend.bonus.toLocaleString('en-US').replace(/,/g, ' ')}</Bonus>
        </Row>
      </Row>
    </Container>
  );
};

export default FriendCard;
