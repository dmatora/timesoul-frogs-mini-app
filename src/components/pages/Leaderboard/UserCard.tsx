import React from 'react';
import styled from 'styled-components';
import { Leader } from '../../../contexts/FrogsContext';
import Row from '../../Row';
import Coin from '../../Status/Coin';

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

const UserIconContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 30px;
  background: #abaaad33;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DummyIcon = styled((props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="63" viewBox="0 0 72 63" fill="none" {...props}>
    <path
      d="M67.29 25.8292C66.93 25.3992 66.86 25.1492 67.19 24.6392C69.25 21.4892 70.05 18.0492 69.65 14.2692C68.56 4.08918 56.74 -2.17082 47.73 2.70918C43.93 4.76918 41.27 7.75918 40.15 11.9792C39.91 12.8892 39.47 13.1292 38.59 13.0592C37.41 12.9692 36.21 12.9092 35.03 13.0292C33.91 13.1392 33.55 12.7092 33.26 11.6892C31.14 4.28917 23.35 -0.280826 15.78 1.29917C5.53 3.44917 0.720002 14.9792 5.58 23.3092C6.08 24.1592 6.02 24.6892 5.35 25.4892C1.14 30.5192 -0.549999 36.2692 1.22 42.6992C2.8 48.4392 6.59 52.6292 11.44 55.8692C18.92 60.8792 27.29 62.8292 35.2 62.9192C40.14 62.8992 44.05 62.4992 47.88 61.5292C55.26 59.6692 61.83 56.4192 66.93 50.5592C73.23 43.3092 73.43 33.1892 67.29 25.8192V25.8292ZM9.4 16.7292C9.53 11.4992 13.7 7.62917 19.1 7.71917C23.82 7.79917 27.9 12.1792 27.81 17.0492C27.71 22.1492 23.4 26.3092 18.39 26.1592C13.35 26.0092 9.28 21.7392 9.41 16.7292H9.4ZM13.74 40.3592C28.71 44.8792 43.68 44.8792 58.65 40.4092C45.36 49.6192 29.67 50.3792 13.74 40.3592ZM54.72 26.1792C49.75 26.1692 45.58 21.9792 45.58 17.0192C45.58 11.9392 49.83 7.68917 54.84 7.71917C59.88 7.74917 64.07 12.0192 64.04 17.0892C64 22.1092 59.81 26.1892 54.72 26.1792Z"
      fill="#262626"
    />
    <path
      d="M54.79 22.6993C57.9546 22.6993 60.52 20.1338 60.52 16.9693C60.52 13.8047 57.9546 11.2393 54.79 11.2393C51.6254 11.2393 49.06 13.8047 49.06 16.9693C49.06 20.1338 51.6254 22.6993 54.79 22.6993Z"
      fill="#262626"
    />
    <path
      d="M18.53 22.649C21.6946 22.649 24.26 20.0836 24.26 16.919C24.26 13.7544 21.6946 11.189 18.53 11.189C15.3654 11.189 12.8 13.7544 12.8 16.919C12.8 20.0836 15.3654 22.649 18.53 22.649Z"
      fill="#262626"
    />
  </svg>
))``;

const UserCard = ({ user, place }: { user: Leader; place: number }) => {
  const name = user.displayAs || `Пользователь ${user.id}`;

  return (
    <Container>
      <Row spread={true} style={{ width: '100%' }}>
        <Row gap="58px">
          <UserIconContainer>
            <DummyIcon />
          </UserIconContainer>
          <div>
            <Name>{name}</Name>
            <Row style={{ justifyContent: 'left' }}>
              <Coin />
              <Balance>{user.balance.toLocaleString().replace(/,/g, ' ')}</Balance>
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
