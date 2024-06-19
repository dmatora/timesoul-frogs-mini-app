import React from 'react';
import Status from '../components/Status';
import FrogButton from '../components/FrogButton';
import PageContainer from '../components/PageContainer';
import { Energy } from '../components/pages/Tap/Energy';
import { Level } from '../components/pages/Tap/Level';
import { NavLink } from 'react-router-dom';
import { useFrogs } from '../contexts/FrogsContext';
import SettingsPanel from '../components/Menu/SettingsPanel';

const Tap: React.FC = () => {
  const { updateLeaderboard } = useFrogs();

  return (
    <>
      <SettingsPanel />
      <PageContainer header={true}>
        <Status />
        <NavLink to="/leaderboard" onClick={updateLeaderboard}>
          <Level />
        </NavLink>
        <FrogButton />
        <Energy />
      </PageContainer>
    </>
  );
};

export default Tap;
