import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import { Leader, useFrogs } from '../contexts/FrogsContext';
import Progress from '../components/pages/Tap/Progress';
import Row from '../components/Row';
import styled from 'styled-components';
import LeaderCard from '../components/pages/Leaderboard/LeaderCard';
import { compactAmount, getLeaderboardImage, getLevelName } from '../lib/utils';
import { NextButton, PrevButton } from '../components/DirectionButtons';
import { useTranslation } from 'react-i18next';
import { useLeaderboard } from '../lib/api';
import Loading from '../components/Loading';
import ImagePreloader from '../components/ImagePreloader';

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

type LeaderWithPlace = Leader & { place?: number };

const Leaderboard: React.FC = () => {
  const { config, balance, level, maxLevel, progress, nextLevelPrice, user } = useFrogs();
  const [observedLevel, setObservedLevel] = useState(level);
  const { t } = useTranslation();
  const { data, isLoading } = useLeaderboard(observedLevel);

  const observedLevelPrice = config.levels?.find((level) => level.number === observedLevel)?.price;

  const handlePrev = async () => {
    if (observedLevel > 1) setObservedLevel((prevObservedLevel) => prevObservedLevel - 1);
  };

  const handleNext = async () => {
    if (observedLevel < maxLevel) setObservedLevel((prevObservedLevel) => prevObservedLevel + 1);
  };

  const adjustLeaderboard = (leaderboard: Leader[]): LeaderWithPlace[] => {
    if (isLoading || !leaderboard) return [];

    let adjustedLeaderboard = [...leaderboard];

    // Remove user from lower level leaderboards
    if (observedLevel < level) {
      adjustedLeaderboard = adjustedLeaderboard.filter((leader) => leader.id !== user.id);
    }

    // Add user to current level leaderboard if missing
    if (observedLevel === level && !adjustedLeaderboard.find((leader) => leader.id === user.id)) {
      const userEntry: LeaderWithPlace = {
        id: user.id,
        displayAs: user.displayAs,
        balance: balance,
      };
      adjustedLeaderboard.push(userEntry);
    }

    // Sort the leaderboard by balance in descending order
    adjustedLeaderboard.sort((a, b) => b.balance - a.balance);

    return adjustedLeaderboard.map((leader, index) => {
      const isLastPlace = index === adjustedLeaderboard.length - 1;
      const shouldHaveUndefinedPlace = isLastPlace && leader.id === user.id && observedLevel === level;

      return {
        ...leader,
        place: shouldHaveUndefinedPlace ? undefined : index + 1,
      };
    });
  };

  const patchedLeaderboard = adjustLeaderboard(data?.list || []);

  const leaderBoardIsEmpty = !isLoading && !patchedLeaderboard.length;

  const prevBlocked = observedLevel === 1;
  const nextBlocked = observedLevel === maxLevel || (leaderBoardIsEmpty && observedLevel > level);
  const preloadImage = [];
  if (!prevBlocked) preloadImage.push(getLeaderboardImage(observedLevel - 1));
  if (!nextBlocked) preloadImage.push(getLeaderboardImage(observedLevel + 1));

  return (
    <PageContainer>
      <Row margin={'119px 0 10px'} gap="40px">
        <PrevButton onClick={handlePrev} disabled={prevBlocked} />
        <Circle level={observedLevel}>
          <img alt="frog" src={getLeaderboardImage(observedLevel)} height="330" />
        </Circle>
        <ImagePreloader images={preloadImage} />
        <NextButton onClick={handleNext} disabled={isLoading || nextBlocked} />
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
            `${t('leaderboard.from')} ${compactAmount(observedLevelPrice)}`}
        </Balance>
      </Row>
      <Row margin={'26px 48px 38px'}>{observedLevel === level && <Progress progress={progress} />}</Row>
      {isLoading && <Loading fontSize="100px" />}
      {leaderBoardIsEmpty && (
        <div style={{ margin: '0 auto', fontSize: '100px' }}>
          {observedLevel > level ? t('leaderboard.beTheFirst') : '...'}
        </div>
      )}
      {!isLoading &&
        patchedLeaderboard.map((leader) => (
          <LeaderCard key={leader.id} user={leader} place={leader.place} length={patchedLeaderboard.length} />
        ))}
    </PageContainer>
  );
};

export default Leaderboard;
