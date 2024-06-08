import React from 'react';
import PageContainer from '../../components/PageContainer';
import Status from '../../components/Status';
import MineMenu from '../../components/Menu/MineMenu';
import styled from 'styled-components';
import { Card as CardType, useFrogs } from '../../contexts/FrogsContext';
import Row from '../../components/Row';
import Card from '../../components/pages/Mine/Card';
import { postSubscribe } from '../../lib/api';
import WebApp from '@twa-dev/sdk';
import { env } from '../../lib/env';

const Overlay = styled.div`
  height: 1529px;
  width: 1080px;
  background-color: white;
  border-radius: 95px;
  opacity: 0.9;
  position: absolute;
  top: 636px;
  z-index: 1;
`;

const Container = styled.div`
  height: 1529px;
  width: 1080px;
  position: absolute;
  top: 636px;
  z-index: 1;
`;

const JoinLabel = styled.div`
  font-size: 45px;
  font-weight: 700;
  text-align: center;
  margin-top: 270px;
`;

const GreenCard = styled.button`
  width: 832px;
  height: 170px;
  margin: 44px auto;

  background-color: #98e703;
  border-radius: 62px;
  box-shadow: 5px 7px 0 0 #262626;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #262626;
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:active {
    position: relative;
    box-shadow: none;
    top: 5px;
    left: 7px;
  }
`;

const MineTeam: React.FC = () => {
  const { user, cardCategories } = useFrogs();
  const cardCategory = cardCategories.find((item) => item.id === 'pr-and-team');

  const handleOnClick = async () => {
    await postSubscribe('telegram');
    WebApp.openTelegramLink(env.channelUrl);
  };

  return (
    <PageContainer>
      <Status />
      <MineMenu />
      {!user.subscribeToOurTg && (
        <>
          <Overlay></Overlay>
          <Container>
            <JoinLabel>
              Присоединяйтесь к нашему каналу
              <br />в Telegram, чтобы разблокировать
            </JoinLabel>
            <GreenCard onClick={handleOnClick}>Разблокировать</GreenCard>
          </Container>
        </>
      )}
      <Row gap={'20px'} style={{ flexWrap: 'wrap', justifyContent: 'left' }} margin={'0 40px'}>
        {cardCategory?.cards && cardCategory.cards.map((card: CardType) => <Card key={card.id} card={card} />)}
      </Row>
    </PageContainer>
  );
};

export default MineTeam;
