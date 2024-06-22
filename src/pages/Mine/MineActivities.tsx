import React from 'react';
import PageContainer from '../../components/PageContainer';
import Status from '../../components/Status';
import MineMenu from '../../components/Menu/MineMenu';
import Row from '../../components/Row';
import { useFrogs, UserCard } from '../../contexts/FrogsContext';
import Card from '../../components/pages/Mine/Card';

const MineActivities: React.FC = () => {
  const { userCards } = useFrogs();
  const cards = userCards.filter((item) => item.categoryName === 'Activities');

  return (
    <PageContainer>
      <Status />
      <MineMenu />
      <Row gap={'20px'} style={{ flexWrap: 'wrap', justifyContent: 'left' }} margin={'0 40px'}>
        {cards && cards.map((card: UserCard) => <Card key={card.id} card={card} />)}
      </Row>
    </PageContainer>
  );
};

export default MineActivities;
