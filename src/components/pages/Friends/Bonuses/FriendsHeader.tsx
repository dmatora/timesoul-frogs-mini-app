import React from 'react';
import styled from 'styled-components';

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
  return (
    <Container>
      <HeaderTitle>Пригласите друзей!</HeaderTitle>
      <HeaderParagraph>Вы и ваш друг получите бонусы</HeaderParagraph>
    </Container>
  );
};

export default FriendsHeader;
