import React from 'react';
import PageContainer from '../../components/PageContainer';
import Status from '../../components/Status';
import MineMenu from '../../components/Menu/MineMenu';
import { Card as CardType, useFrogs } from '../../contexts/FrogsContext';
import Row from '../../components/Row';
import Card from '../../components/pages/Mine/Card';

const MineAchievements: React.FC = () => {
  const { cardCategories } = useFrogs();
  const cardCategory = cardCategories.find((item) => item.id === 'specials');

  return (
    <PageContainer>
      <Status />
      <MineMenu />
      <Row gap={'20px'} style={{ flexWrap: 'wrap', justifyContent: 'left' }} margin={'0 40px'}>
        {cardCategory?.cards &&
          cardCategory.cards.map((card: CardType) => <Card key={card.id} card={card} special={true} />)}
      </Row>
    </PageContainer>
  );
};

export default MineAchievements;
