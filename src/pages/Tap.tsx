import React from 'react';
import Status from '../components/Status';
import FrogButton from '../components/pages/Tap/Button';
import PageContainer from '../components/PageContainer';
import { Energy } from '../components/pages/Tap/Energy';
import { Level } from '../components/pages/Tap/Level';
import { NavLink } from 'react-router-dom';
import SettingsPanel from '../components/Menu/SettingsPanel';

const Tap: React.FC = () => (
  <div>
    <SettingsPanel />
    <PageContainer header={true}>
      <Status />
      <NavLink to="/leaderboard">
        <Level />
      </NavLink>
      <FrogButton />
      <Energy />
    </PageContainer>
  </div>
);
export default Tap;
