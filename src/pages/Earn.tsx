import React from 'react';
import PageContainer from '../components/PageContainer';
import EarnHeader from '../components/pages/Earn/EarnHeader';
import styled from 'styled-components';
import TelegramTask from '../components/pages/Earn/TaskCards/TelegramTask';
import XTask from '../components/pages/Earn/TaskCards/XTask';
import AdTask from '../components/pages/Earn/TaskCards/AdTask';
import { useFrogs } from '../contexts/FrogsContext';

const Label = styled.div`
  font-size: 44px;
  font-weight: 600;
  width: 960px;
  margin: 20px auto;
`;

const Earn: React.FC = () => {
  const { user } = useFrogs();
  return (
    <PageContainer>
      <EarnHeader />
      {/* ToDo: implement EverydayTask */}
      {/*<Label>Ежедневные задания</Label>*/}
      {/*<EverydayTask />*/}
      <Label>Список заданий</Label>
      <TelegramTask />
      <XTask />
      {user.subscribeToOurTg && (
        <>
          <Label>Здесь может быть Ваша реклама</Label>
          <AdTask />
        </>
      )}
    </PageContainer>
  );
};

export default Earn;
