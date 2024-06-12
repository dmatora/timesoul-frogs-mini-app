import React from 'react';
import PageContainer from '../components/PageContainer';
import { useFrogs } from '../contexts/FrogsContext';
import Progress from '../components/pages/Tap/Progress';
import Row from '../components/Row';
import styled from 'styled-components';
import UserCard from '../components/pages/Leaderboard/UserCard';
import { getLevelName } from '../lib/utils';

const Level = styled.div`
  margin: 0 auto;
  font-size: 81px;
  font-weight: 700;
`;

const Balance = styled.div`
  margin: 0 auto;
  font-size: 45px;
  font-weight: 500;
`;

const Leaderboard: React.FC = () => {
  const { balance, level, leaders, nextLevelPrice } = useFrogs();

  return (
    <PageContainer>
      <Row margin={'119px 0 10px'}>
        <img src={'/img/Frog.png'} width={441} />
      </Row>
      <Row>
        <Level>{getLevelName(level)}</Level>
      </Row>
      <Row>
        <Balance>
          {balance}
          {nextLevelPrice && ` / ${nextLevelPrice / 1000}K`}
        </Balance>
      </Row>
      <Row margin={'26px 48px 38px'}>
        <Progress />
      </Row>
      {leaders.map((leader, k) => (
        <UserCard key={leader.id} user={leader} place={k + 1} />
      ))}
    </PageContainer>
  );
};

export default Leaderboard;
