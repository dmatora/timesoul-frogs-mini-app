import React from 'react';
import Status from '../components/Status';
import FrogButton from '../components/pages/Tap/Button';
import PageContainer from '../components/PageContainer';
import { Energy } from '../components/pages/Tap/Energy';
import SettingsPanel from '../components/Menu/SettingsPanel';
import MoodLevel from '../components/pages/Tap/Levels/MoodLevel';

const Tap: React.FC = () => (
  <div>
    <SettingsPanel />
    <PageContainer header={true}>
      <Status />
      <MoodLevel />
      <FrogButton />
      <Energy />
    </PageContainer>
  </div>
);
export default Tap;
