import React from 'react';
import PageContainer from '../components/PageContainer';
import EarnHeader from '../components/pages/Earn/EarnHeader';
import styled from 'styled-components';
import TelegramTask from '../components/pages/Earn/TaskCards/TelegramTask';
import XTask from '../components/pages/Earn/TaskCards/XTask';
import AdTask from '../components/pages/Earn/TaskCards/AdTask';
import { useFrogs } from '../contexts/FrogsContext';
import { useTranslation } from 'react-i18next';
import { env } from '../lib/env';

const Label = styled.div`
  font-size: 44px;
  font-weight: 600;
  width: 960px;
  margin: 20px auto;
`;

const Earn: React.FC = () => {
  const { tasks } = useFrogs();
  const { t } = useTranslation();
  const ourTgChannelTask = tasks.find((task) => task.id === env.channelTask);

  return (
    <PageContainer>
      <EarnHeader />
      {/* ToDo: implement EverydayTask */}
      {/*<Label>{t('earn.dailyTasks')}</Label>*/}
      {/*<EverydayTask />*/}
      {ourTgChannelTask?.isCompleted && (
        <>
          <Label>{t('earn.yourAd')}</Label>
          <AdTask />
        </>
      )}
      <Label>{t('earn.tasksList')}</Label>
      {tasks.map((task) => {
        const isX = task.url.startsWith('https://x.com');
        if (isX) return <XTask key={task.id} task={task} />;
        return <TelegramTask key={task.id} task={task} />;
      })}
    </PageContainer>
  );
};

export default Earn;
