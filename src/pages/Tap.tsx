import React from 'react';
import Status from '../components/Status';
import FrogButton from '../components/FrogButton';
import PageContainer from '../components/PageContainer';
import { Energy } from '../components/pages/Tap/Energy';
import Row from '../components/Row';
import Progress from '../components/pages/Tap/Progress';
import { Level } from '../components/pages/Tap/Level';

const Tap: React.FC = () => {
  return (
    <PageContainer minHeight={'1806px'}>
      <Status />
      <Level />
      <Row margin={'0 40px'}>
        <Progress />
      </Row>
      <FrogButton />
      <Energy />
    </PageContainer>
  );
};

export default Tap;
