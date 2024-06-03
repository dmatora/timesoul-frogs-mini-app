import React from 'react';
import PageContainer from '../../components/PageContainer';
import Status from '../../components/Status';
import MineMenu from '../../components/Menu/MineMenu';

const MineTeam: React.FC = () => {
  return (
    <PageContainer>
      <Status coins={0} />
      <MineMenu />
    </PageContainer>
  );
};

export default MineTeam;
