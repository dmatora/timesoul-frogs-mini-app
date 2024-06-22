import React from 'react';
import styled from 'styled-components';
import Row from '../../Row';
import Coin from '../../Status/Coin';
import OpenButton from './OpenButton';
import { amountWithSpaces } from '../../../lib/utils';

const Container = styled.div<{ done?: boolean }>`
  border: ${({ done }) => (done ? '3px solid #98e703' : 'none')};
  height: 168px;
  width: 900px;
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

const TaskCard = ({
  label,
  Icon,
  reward = true,
  done = false,
  bonus = 5000,
  onClick,
}: {
  label: string;
  Icon: string;
  reward?: boolean;
  done: boolean;
  bonus?: number;
  onClick: () => Promise<void>;
}) => {
  return (
    <Container done={done}>
      <Row spread={true} style={{ width: '100%' }}>
        <Row>
          <Icon />
          <div>
            <Label>{label}</Label>
            {reward && (
              <Row style={{ justifyContent: 'left' }} margin={'7px 0 0'}>
                <Coin />
                <Amount>+{amountWithSpaces(bonus)}</Amount>
              </Row>
            )}
          </div>
        </Row>
        {done && <DoneIcon />}
        {!done && <OpenButton onClick={onClick} />}
      </Row>
    </Container>
  );
};

export default TaskCard;
