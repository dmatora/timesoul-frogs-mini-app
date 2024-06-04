import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Tap from '../pages/Tap';
import Friends from '../pages/Friends';
import Earn from '../pages/Earn';
import Food from '../pages/Food';
import Menu from '../components/Menu';
import React from 'react';
import MineDocs from '../pages/Mine/MineDocs';
import MineTeam from '../pages/Mine/MineTeam';
import MineExclusive from '../pages/Mine/MineExclusive';
import MineMarkets from '../pages/Mine/MineMarkets';

const ScaledApp = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  width: 1080px;
  height: 2020px; // leaves a bottom white gap on short height desktop but only if page is 100vh
  margin: 0 auto;
  @media (max-width: 1079px) {
    height: calc(2020px * var(--scale));
    transform-origin: 0 0;
    transform: scale(var(--scale));
  }
`;

export function App() {
  return (
    <Router>
      <Menu />
      <ScaledApp>
        <Routes>
          <Route path="/" element={<Tap />} />
          <Route path="/mine" element={<Navigate to="/mine/markets" />} />
          <Route path="/mine/markets" element={<MineMarkets />} />
          <Route path="/mine/team" element={<MineTeam />} />
          <Route path="/mine/docs" element={<MineDocs />} />
          <Route path="/mine/exclusive" element={<MineExclusive />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </ScaledApp>
    </Router>
  );
}

export default App;
