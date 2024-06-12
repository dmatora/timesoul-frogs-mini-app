import React from 'react';
import PageContainer from '../components/PageContainer';
import EarnHeader from '../components/pages/Earn/EarnHeader';
import styled from 'styled-components';
import TelegramTask from '../components/pages/Earn/TaskCards/TelegramTask';
import XTask from '../components/pages/Earn/TaskCards/XTask';
import AdTask from '../components/pages/Earn/TaskCards/AdTask';
import { useFrogs } from '../contexts/FrogsContext';
import { useTranslation } from 'react-i18next';

const Label = styled.div`
  font-size: 44px;
  font-weight: 600;
  width: 960px;
  margin: 20px auto;
`;

const Earn: React.FC = () => {
  const { user } = useFrogs();
  const { t } = useTranslation();

  return (
    <PageContainer>
      <EarnHeader />
      {/* ToDo: implement EverydayTask */}
      {/*<Label>{t('earn.dailyTasks')}</Label>*/}
      {/*<EverydayTask />*/}
      <Label>{t('earn.tasksList')}</Label>
      <TelegramTask />
      <XTask />
      {user.subscribeToOurTg && (
        <>
          <Label>{t('earn.yourAd')}</Label>
          <AdTask />
        </>
      )}
    </PageContainer>
  );
};

export default Earn;
