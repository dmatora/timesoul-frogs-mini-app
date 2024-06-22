import React from 'react';
import PageContainer from '../../components/PageContainer';
import Status from '../../components/Status';
import MineMenu from '../../components/Menu/MineMenu';
import { useFrogs, UserCard } from '../../contexts/FrogsContext';
import Row from '../../components/Row';
import Card from '../../components/pages/Mine/Card';

const MineAchievements: React.FC = () => {
  const { userCards } = useFrogs();
  const cards = userCards.filter((item) => item.categoryName === 'Achievements');

  return (
    <PageContainer>
      <Status />
      <MineMenu />
      <Row gap={'20px'} style={{ flexWrap: 'wrap', justifyContent: 'left' }} margin={'0 40px'}>
        {cards && cards.map((card: UserCard) => <Card key={card.id} card={card} special={true} />)}
      </Row>
    </PageContainer>
  );
};

export default MineAchievements;
