import React, { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import * as Sentry from '@sentry/react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Tap from '../pages/Tap';
import Friends from '../pages/Friends';
import Earn from '../pages/Earn';
import Food from '../pages/Food';
import Menu from '../components/Menu';
import MineWeb3 from '../pages/Mine/MineWeb3';
import MineInvestments from '../pages/Mine/MineInvestments';
import MineAchievements from '../pages/Mine/MineAchievements';
import MineActivities from '../pages/Mine/MineActivities';
import { FrogsProvider, useFrogs } from '../contexts/FrogsContext';
import { handleResize } from '../lib/utils';
import Leaderboard from '../pages/Leaderboard';
import Popups from '../components/Popups';
import ForcePortrait from '../components/ForcePortrait';
import { env } from '../lib/env';
import { Notifications } from '../components/Notifications';
import { onlineStatusInit } from '../controllers/OnlineStatusController';
import { useLocation } from 'react-use';
import Settings from '../pages/Settings';
import { QueryClient, QueryClientProvider } from 'react-query';
import ImagePreloader from '../components/ImagePreloader';

const ScaledApp = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  width: 1080px;
  height: 0;
  margin: 0 auto;
  @media (max-width: 1079px) {
    transform-origin: 0 0;
    transform: scale(var(--scale));
  }

  .fade-enter {
    position: absolute;
    opacity: 0;
    z-index: 10;
    transition: opacity 300ms ease-in;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
`;

const VerticalApp = styled.div`
  @media screen and (orientation: landscape) {
    display: none;
  }
`;

Sentry.init({
  dsn: env.sentryDsn,
});

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <FrogsProvider>{children}</FrogsProvider>
  </QueryClientProvider>
);

const HideWhileLoading = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useFrogs();

  if (loading) return null;
  return children;
};

const PreloadImages = () => {
  const { userCards } = useFrogs();
  const cardImages = userCards.map((card) => [card.coverUrl, card.coverNaUrl]).flat();
  const popupImages = ['/img/frog/bored.png'];
  return <ImagePreloader images={[...cardImages, ...popupImages]} />;
};

export function App() {
  useEffect(() => {
    handleResize();
    onlineStatusInit();
  }, []);

  const location = useLocation();

  return (
    <Providers>
      <Router>
        <Notifications />
        <ForcePortrait />
        <VerticalApp>
          <PreloadImages />
          <HideWhileLoading>
            <Menu />
            <Popups />
            <ScaledApp>
              <TransitionGroup>
                <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
                  <Routes location={location}>
                    <Route path="/" element={<Tap />} />
                    <Route path="/mine" element={<Navigate to="/mine/activities" />} />
                    <Route path="/mine/activities" element={<MineActivities />} />
                    <Route path="/mine/investments" element={<MineInvestments />} />
                    <Route path="/mine/web3" element={<MineWeb3 />} />
                    <Route path="/mine/achievements" element={<MineAchievements />} />
                    <Route path="/network" element={<Settings selection="network" />} />
                    <Route path="/language" element={<Settings selection="language" />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/earn" element={<Earn />} />
                    <Route path="/food" element={<Food />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                  </Routes>
                </CSSTransition>
              </TransitionGroup>
            </ScaledApp>
          </HideWhileLoading>
        </VerticalApp>
      </Router>
    </Providers>
  );
}

export default App;
