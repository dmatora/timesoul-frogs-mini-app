import React from 'react';
import styled from 'styled-components';
import Row from '../../Row';
import Coin from '../../Status/Coin';
import OpenButton from './OpenButton';

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
`;

const Amount = styled.div`
  font-weight: 600;
  margin: 0 5px;
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
  onClick,
}: {
  label: string | string[];
  Icon: string;
  reward?: boolean;
  done: boolean;
  onClick: () => Promise<void>;
}) => {
  return (
    <Container done={done}>
      <Row spread={true} style={{ width: '100%' }}>
        <Row>
          <Icon />
          <div>
            {typeof label === 'string' ? (
              label
            ) : (
              <>
                {label[0]}
                <br />
                {label[1]}
              </>
            )}
            {reward && (
              <Row style={{ justifyContent: 'left' }} margin={'7px 0 0'}>
                <Coin />
                <Amount>+5 000</Amount>
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
