import React from 'react';
import PageContainer from '../components/PageContainer';
import { Dish, useFrogs } from '../contexts/FrogsContext';
import Row from '../components/Row';
import FoodCard from '../components/pages/Food/FoodCard';
import SatietyLevel from '../components/pages/Tap/Levels/SatietyLevel';

const Food: React.FC = () => {
  const { dishes } = useFrogs();

  return (
    <PageContainer>
      <SatietyLevel />
      <Row gap={'20px'} style={{ flexWrap: 'wrap', justifyContent: 'left' }} margin={'40px 40px 20px'}>
        {dishes.map((dish: Dish) => (
          <FoodCard key={dish.id} dish={dish} />
        ))}
      </Row>
    </PageContainer>
  );
};

export default Food;
