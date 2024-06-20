import React from 'react';
import styled from 'styled-components';
import Coin from './Coin';
import Row from '../Row';
import { useFrogs } from '../../contexts/FrogsContext';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  margin: 37px 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 42px;
`;

const Balance = styled.div<{ length: number }>`
  font-size: 90px;
  font-weight: bold;
  line-height: 168px;
  margin-left: 15px;
  width: ${({ length }) => length}ch;
`;

const WhiteCard = styled.div`
  height: 124px;
  width: 315px;
  background-color: white;
  border-radius: 62px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const GreenCard = styled.div`
  height: 124px;
  width: 315px;
  background-color: #98e703;
  border-radius: 62px;
  box-shadow: 5px 3px 0 0 black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const CardLabel = styled.div`
  font-size: 20px;
`;

const CardValue = styled.div`
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 50px;
`;

const TipIcon = styled((props) => (
  <svg {...props} width="43" height="44" viewBox="0 0 43 44">
    <path
      d="M21.23 0.76001C9.51004 0.76001 0 10.26 0 21.99C0 33.72 9.50004 43.22 21.23 43.22C32.96 43.22 42.46 33.72 42.46 21.99C42.46 10.26 32.96 0.76001 21.23 0.76001Z"
      fill="#98e703"
    />
    <path
      d="M23.05 33.07H19.17V17.97H23.05V33.07ZM22.82 14.8C22.34 15.22 21.76 15.43 21.1 15.43C20.44 15.43 19.86 15.22 19.38 14.8C18.9 14.38 18.66 13.82 18.66 13.12C18.66 12.42 18.9 11.87 19.38 11.44C19.86 11.01 20.44 10.81 21.1 10.81C21.76 10.81 22.34 11.02 22.82 11.44C23.3 11.86 23.54 12.42 23.54 13.12C23.54 13.82 23.3 14.37 22.82 14.8Z"
      fill="black"
    />
  </svg>
))`
  height: 50px;
`;

const Status = () => {
  const { earnPerTap, balance, nextLevelPrice, profitPerHour } = useFrogs();
  const { t } = useTranslation();
  const balanceFormatted = (balance && Math.round(balance).toLocaleString('en-US').replace(/,/g, ' ')) || '';

  return (
    <Container>
      <Row spread={true}>
        <WhiteCard className="overlap-group">
          <CardLabel>{t('system.earnPerTap')}</CardLabel>
          <CardRow>
            <Coin />
            <CardValue>+{earnPerTap}</CardValue>
          </CardRow>
        </WhiteCard>
        <WhiteCard>
          <CardLabel>{t('system.coinsToLevelUp')}</CardLabel>
          <CardValue>{nextLevelPrice ? `${nextLevelPrice / 1000}K` : `-`}</CardValue>
        </WhiteCard>
        <WhiteCard>
          <CardLabel>{t('system.profitPerHour')}</CardLabel>
          <CardRow>
            <Coin />
            <CardValue>{profitPerHour ? `+${profitPerHour}` : '0'}</CardValue>
            {/*<TipIcon style={{ marginLeft: 8 }} />*/}
            {/* ToDo implement Tip popup */}
          </CardRow>
        </WhiteCard>
      </Row>
      <Center>
        <Coin size="medium" />
        <Balance length={balanceFormatted.length}>{balanceFormatted}</Balance>
      </Center>
    </Container>
  );
};

export default Status;
