import React from 'react';
import styled from 'styled-components';
import EarnCoin from './EarnCoin';

const Container = styled.div`
  margin: 110px auto 0;
  text-align: center;
`;

const HeaderTitle = styled.div`
  font-size: 81px;
  font-weight: 500;
  margin: 28px auto 47px;
`;

const EarnHeader: React.FC = () => {
  return (
    <Container>
      <EarnCoin />
      <HeaderTitle>
        Заработай больше
        <br /> монет!
      </HeaderTitle>
    </Container>
  );
};

export default EarnHeader;
