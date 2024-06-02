import React from 'react';
import PageContainer from '../components/PageContainer';
import Status from '../components/Status';

const Mine: React.FC = () => {
  return (
    <PageContainer>
      <Status coins={0} />
    </PageContainer>
  );
};

export default Mine;
