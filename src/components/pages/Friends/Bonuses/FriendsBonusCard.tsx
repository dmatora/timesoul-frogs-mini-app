import React from 'react';
import styled from 'styled-components';
import Row from '../../../Row';
import BonusIcon from './BonusIcon';
import Coin from '../../../Status/Coin';

const Container = styled.div<{ premium?: boolean }>`
  height: ${({ premium }) => (premium ? '300px' : '246px')};
  width: 900px;
  border-radius: ${({ premium }) => (premium ? '150px' : '123px')};
  background: white;
  padding: 0 50px;
  display: flex;
  margin: 0 auto 20px;
`;

const Title = styled.div`
  font-size: 45px;
  font-weight: 600;
`;

const Amount = styled.div`
  font-size: 43px;
  font-weight: 600;
  margin: 0 25px 0 15px;
`;

const Text = styled.div`
  font-size: 36px;
  font-weight: 300;
`;

const FriendsBonusCard = ({ premium }: { premium?: boolean }) => {
  return (
    <Container premium={premium}>
      <Row spread={true}>
        <BonusIcon />
        <div>
          <Title>
            {premium ? (
              <span>
                Пригласить друга
                <br /> с Telegram Premium
              </span>
            ) : (
              'Пригласить друга'
            )}
          </Title>
          <Row style={{ justifyContent: 'left' }} margin={'30px 0 0'}>
            <Coin />
            <Amount>+{premium ? '25 000' : '5 000'}</Amount>
            <Text>для вас и вашего друга </Text>
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default FriendsBonusCard;
