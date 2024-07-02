import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import Coin from '../../Status/Coin';
import Row from '../../Row';
import Popup from '../Popup';
import { useFrogs, UserTask } from '../../../contexts/FrogsContext';
import { amountWithSpaces } from '../../../lib/utils';
import { isCheckingTaskEvent } from '../../../lib/events';
import WebApp from '@twa-dev/sdk';
import getIcon from '../../pages/Earn/TaskIcons';
import React from 'react';
import { notificationEmit } from '../../../controllers/NotificationsController';
import { patchUserTasks } from '../../../lib/api';

const Header = styled.div`
  text-align: center;
  font-size: 81px;
  font-weight: 500;
  margin: 60px auto;
`;

const JoinButton = styled.button`
  padding: 23px 100px;
  min-width: 532px;
  margin: 44px auto 90px;

  background-color: #98e703;
  border: none;
  border-radius: 50px;
  box-shadow: 5px 7px 0 0 #262626;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #262626;
  font-size: 45px;
  font-weight: 600;

  &:active {
    position: relative;
    box-shadow: none;
    top: 5px;
    left: 7px;
  }
`;

const Bonus = styled.div`
  color: #262626;
  font-size: 35px;
  font-weight: 500;
  margin: 70px 0 80px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  scale: 1.5;
`;

const CheckingCard = () => {
  const { event, updateUserTasks, setEvent, tasks } = useFrogs();
  const { t } = useTranslation();

  if (!isCheckingTaskEvent(event)) throw new Error('Should not happen');

  const handleJoin = async (task: UserTask) => {
    const isX = task.url.startsWith('https://x.com');
    if (isX) WebApp.openLink(task.url);
    else WebApp.openTelegramLink(task.url);
  };

  const handleCheck = async (task: UserTask) => {
    await patchUserTasks(task.id);
    const updatedTasks = await updateUserTasks();
    const updatedTask = updatedTasks.find((userTask) => userTask.id === task.id);
    if (!updatedTask) throw new Error('Should not happen');
    setEvent({ ...event, task: updatedTask });
    if (!updatedTask?.isCompleted)
      notificationEmit({
        title: t('popup_CheckTask.taskIsNotCompleted'),
      });
    return !updatedTask?.isCompleted;
  };

  const Icon = getIcon(event.task);

  return (
    <Popup
      hideClose={event.task.isCompleted}
      close={t('popup_CheckTask.check')}
      onConfirm={() => handleCheck(event.task)}
    >
      <Row>
        <Icon large={true} />
      </Row>
      <Header>{event.task.title}</Header>
      <JoinButton onClick={() => handleJoin(event.task)}>{t('popup_CheckTask.join')}</JoinButton>
      <Bonus>
        <Coin size={'small'} />+{amountWithSpaces(event.task.bonus)}
      </Bonus>
    </Popup>
  );
};

export default CheckingCard;
