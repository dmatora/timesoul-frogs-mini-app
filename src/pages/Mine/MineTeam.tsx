import React from 'react';
import PageContainer from '../../components/PageContainer';
import Status from '../../components/Status';
import MineMenu from '../../components/Menu/MineMenu';
import styled from 'styled-components';

const Overlay = styled.div`
  height: 1529px;
  width: 1082px;
  background-color: white;
  border-radius: 95px;
  opacity: 0.9;
  position: absolute;
  top: 636px;
`;

const Container = styled.div`
  height: 1529px;
  width: 1082px;
  position: absolute;
  top: 636px;
`;

const JoinLabel = styled.div`
  font-family: Geologica, sans-serif;
  font-size: 45px;
  font-weight: 700;
  text-align: center;
  margin-top: 270px;
`;

const GreenCard = styled.div`
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
  font-family: Geologica, sans-serif;
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const MineTeam: React.FC = () => {
  return (
    <PageContainer>
      <Status />
      <MineMenu />
      <Overlay></Overlay>
      <Container>
        <JoinLabel>
          Присоединяйтесь к нашему каналу
          <br />в Telegram, чтобы разблокировать
        </JoinLabel>
        <a href="https://t.me/VenomFoundationOfficial">
          <GreenCard>Разблокировать</GreenCard>
        </a>
      </Container>
    </PageContainer>
  );
};

export default MineTeam;
