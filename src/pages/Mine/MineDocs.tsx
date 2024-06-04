import React from 'react';
import PageContainer from '../../components/PageContainer';
import Status from '../../components/Status';
import MineMenu from '../../components/Menu/MineMenu';

const MineDocs: React.FC = () => {
  return (
    <PageContainer>
      <Status />
      <MineMenu />
    </PageContainer>
  );
};

export default MineDocs;
