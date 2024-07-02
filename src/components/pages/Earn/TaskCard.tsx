import React from 'react';
import styled from 'styled-components';
import Row from '../../Row';
import Coin from '../../Status/Coin';
import { amountWithSpaces } from '../../../lib/utils';
import { NextButton } from '../../DirectionButtons';
import { useFrogs, UserTask } from '../../../contexts/FrogsContext';
import getIcon from './TaskIcons';

const Container = styled.div<{ done?: boolean }>`
  border: ${({ done }) => (done ? '3px solid #98e703' : '3px solid transparent')};
  height: 162px;
  width: 894px;
  border-radius: 84px;
  background: white;
  padding: 0 58px 0 33px;
  display: flex;
  margin: 0 auto 20px;
  font-size: 33px;
  flex-shrink: 0;
`;

const Amount = styled.div`
  font-weight: 600;
  margin: 0 5px;
`;

const Label = styled.div`
  width: 510px;
`;

const DoneIcon = styled((props) => (
  <svg viewBox="0 0 46 34" width="46" height="34" fill="none" {...props}>
    <path d="M3 16.988L16.0081 30L43 3" stroke="#98E703" strokeWidth="5" strokeLinecap="round" />
  </svg>
))`
  padding: 0 36px;
`;

const TaskCard = ({ task }: { task: UserTask }) => {
  const { setEvent } = useFrogs();
  const Icon = getIcon(task);

  const handleOnClick = () => {
    setEvent({ type: 'checkingTask', task });
  };

  return (
    <Container done={task.isCompleted} onClick={handleOnClick}>
      <Row spread={true} style={{ width: '100%' }}>
        <Row>
          <Icon />
          <div>
            <Label>{task.title}</Label>
            <Row style={{ justifyContent: 'left' }} margin={'7px 0 0'}>
              <Coin />
              <Amount>+{amountWithSpaces(task.bonus)}</Amount>
            </Row>
          </div>
        </Row>
        {task.isCompleted && <DoneIcon />}
        {!task.isCompleted && <NextButton onClick={() => null} />}
      </Row>
    </Container>
  );
};

export default TaskCard;
