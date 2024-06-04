import React from 'react';
import PageContainer from '../../components/PageContainer';
import Status from '../../components/Status';
import MineMenu from '../../components/Menu/MineMenu';

const MineExclusive: React.FC = () => {
  return (
    <PageContainer>
      <Status />
      <MineMenu />
    </PageContainer>
  );
};

export default MineExclusive;
