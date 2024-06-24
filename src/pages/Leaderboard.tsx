import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import { useFrogs } from '../contexts/FrogsContext';
import Progress from '../components/pages/Tap/Progress';
import Row from '../components/Row';
import styled from 'styled-components';
import UserCard from '../components/pages/Leaderboard/UserCard';
import { compactAmount, getLevelName } from '../lib/utils';
import { NextButton, PrevButton } from '../components/DirectionButtons';
import { useTranslation } from 'react-i18next';
import { useLeaderboard } from '../lib/api';
import Loading from '../components/Loading';

const gradient = [
  '',
  '#ac794e 0%, #4d3520 100%',
  '#c5bdb4 0%, #5f5b56 100%',
  '#fcb700 0%, #966c00 100%',
  '#d9d3ce 0%, #736f6d 100%',
  '#1ce1ae 0%, #107b5f 100%',
  '#bb76f8 0%, #6e4592 100%',
  '#11a0f1 0%, #095c8b 100%',
  '#d43a3a 0%, #6e1e1e 100%',
  '#10c1ac 0%, #075b51 100%',
];

const Circle = styled.div<{ level: number }>`
  width: 440px;
  height: 440px;
  border-radius: 50%;
  background: ${({ level }) => `linear-gradient(180deg, ${gradient[level]})`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  const { config, balance, level, maxLevel, nextLevelPrice } = useFrogs();
  const [observedLevel, setObservedLevel] = useState(level);
  const { t } = useTranslation();
  const { data, isLoading } = useLeaderboard(observedLevel);

  const observedLevelPrice = config.levels.find((level) => level.number === observedLevel)?.price;

  const handlePrev = async () => {
    if (observedLevel > 1) setObservedLevel((prevObservedLevel) => prevObservedLevel - 1);
  };

  const handleNext = async () => {
    if (observedLevel < maxLevel) setObservedLevel((prevObservedLevel) => prevObservedLevel + 1);
  };

  const leaderBoardIsEmpty = !isLoading && !data?.list.length;

  return (
    <PageContainer>
      <Row margin={'119px 0 10px'} gap="40px">
        <PrevButton onClick={handlePrev} disabled={observedLevel === 1} />
        <Circle level={observedLevel}>
          <img
            alt="frog"
            src={`/img/frog/leaderboard/${observedLevel}.${getLevelName(observedLevel).toLowerCase()}.png`}
            height="330"
          />
        </Circle>
        <NextButton
          onClick={handleNext}
          disabled={observedLevel === maxLevel || isLoading || (leaderBoardIsEmpty && observedLevel > level)}
        />
      </Row>
      <Row>
        <Level>{getLevelName(observedLevel)}</Level>
      </Row>
      <Row>
        <Balance>
          {observedLevel === level && (
            <>
              {compactAmount(balance)}
              {nextLevelPrice && ` / ${compactAmount(nextLevelPrice)}`}
            </>
          )}
          {observedLevel !== level &&
            observedLevelPrice !== undefined &&
            `${t('leaderboard.from')}  ${compactAmount(observedLevelPrice)}`}
        </Balance>
      </Row>
      <Row margin={'26px 48px 38px'}>{observedLevel === level && <Progress />}</Row>
      {isLoading && <Loading fontSize="100px" />}
      {leaderBoardIsEmpty && (
        <div style={{ margin: '0 auto', fontSize: '100px' }}>
          {observedLevel > level ? t('leaderboard.beTheFirst') : '...'}
        </div>
      )}
      {!isLoading && data?.list.map((leader, k) => <UserCard key={leader.id} user={leader} place={k + 1} />)}
    </PageContainer>
  );
};

export default Leaderboard;
