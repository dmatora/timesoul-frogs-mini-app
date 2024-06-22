import React, { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import * as Sentry from '@sentry/react';

import Tap from '../pages/Tap';
import Friends from '../pages/Friends';
import Earn from '../pages/Earn';
import Food from '../pages/Food';
import Menu from '../components/Menu';
import MineWeb3 from '../pages/Mine/MineWeb3';
import MineInvestments from '../pages/Mine/MineInvestments';
import MineAchievements from '../pages/Mine/MineAchievements';
import MineActivities from '../pages/Mine/MineActivities';
import { FrogsProvider } from '../contexts/FrogsContext';
import { handleResize } from '../lib/utils';
import Leaderboard from '../pages/Leaderboard';
import Popups from '../components/Popups';
import ForcePortrait from '../components/ForcePortrait';
import { env } from '../lib/env';
import { Notifications } from '../components/Notifications';
import { onlineStatusInit } from '../controllers/OnlineStatusController';

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
`;

const VerticalApp = styled.div`
  @media screen and (orientation: landscape) {
    display: none;
  }
`;

Sentry.init({
  dsn: env.sentryDsn,
});

export function App() {
  useEffect(() => {
    handleResize();
    onlineStatusInit();
  }, []);

  return (
    <FrogsProvider>
      <Router>
        <Notifications />
        <ForcePortrait />
        <VerticalApp>
          <Menu />
          <Popups />
          <ScaledApp>
            <Routes>
              <Route path="/" element={<Tap />} />
              <Route path="/mine" element={<Navigate to="/mine/activities" />} />
              <Route path="/mine/activities" element={<MineActivities />} />
              <Route path="/mine/investments" element={<MineInvestments />} />
              <Route path="/mine/web3" element={<MineWeb3 />} />
              <Route path="/mine/achievements" element={<MineAchievements />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/earn" element={<Earn />} />
              <Route path="/food" element={<Food />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </ScaledApp>
        </VerticalApp>
      </Router>
    </FrogsProvider>
  );
}

export default App;
