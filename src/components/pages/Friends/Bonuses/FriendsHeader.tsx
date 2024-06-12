import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  margin: 56px auto 0;
  text-align: center;
`;

const HeaderTitle = styled.div`
  font-size: 81px;
  font-weight: 500;
`;

const HeaderParagraph = styled.p`
  font-size: 40px;
  font-weight: 400;
  margin-top: 0;
`;

const FriendsHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <HeaderTitle>{t('friends.inviteFriends')}</HeaderTitle>
      <HeaderParagraph>{t('friends.receiveBonuses')}</HeaderParagraph>
    </Container>
  );
};

export default FriendsHeader;
