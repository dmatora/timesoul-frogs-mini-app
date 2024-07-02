import React from 'react';
import PageContainer from '../components/PageContainer';
import EarnHeader from '../components/pages/Earn/EarnHeader';
import styled from 'styled-components';
import { useFrogs } from '../contexts/FrogsContext';
import { useTranslation } from 'react-i18next';
import TaskCard from '../components/pages/Earn/TaskCard';

const Label = styled.div`
  font-size: 44px;
  font-weight: 600;
  width: 960px;
  margin: 20px auto;
`;

const Earn: React.FC = () => {
  const { tasks } = useFrogs();
  const { t } = useTranslation();

  return (
    <PageContainer>
      <EarnHeader />
      {/* ToDo: implement EverydayTask */}
      {/*<Label>{t('earn.dailyTasks')}</Label>*/}
      {/*<EverydayTask />*/}
      <Label>{t('earn.tasksList')}</Label>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </PageContainer>
  );
};

export default Earn;
