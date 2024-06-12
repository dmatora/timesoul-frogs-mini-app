import React from 'react';
import styled from 'styled-components';
import EarnCoin from './EarnCoin';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  margin: 110px auto 0;
  text-align: center;
`;

const HeaderTitle = styled.div`
  width: 800px;
  font-size: 81px;
  font-weight: 500;
  margin: 28px auto 47px;
`;

const EarnHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <EarnCoin />
      <HeaderTitle>{t('earn.moreCoins')}</HeaderTitle>
    </Container>
  );
};

export default EarnHeader;
