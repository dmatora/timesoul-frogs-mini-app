import styled from 'styled-components';
import React from 'react';
import Row from '../../../Row';
import { useFrogs } from '../../../../contexts/FrogsContext';
import Progress from '../Progress';
import { getLevelName } from '../../../../lib/utils';

export const LevelCard = styled.div`
  height: 60px;
  padding: 0 22px;
  background-color: #98e703;
  border-radius: 30px;
  box-shadow: 5px 2px 0 0 black;

  color: #262626;
  font-size: 37px;
  font-weight: 500;
  line-height: 60px;
`;

export const LevelValue = styled.div`
  color: white;
  font-size: 37px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ArrowIcon = styled((props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
    <path
      d="M1.92438 17.9883C1.53553 17.9883 1.13645 17.8333 0.839703 17.5336C0.235968 16.924 0.235968 15.9424 0.839703 15.3431L6.68264 9.44308L0.931794 3.63606C0.32806 3.02642 0.32806 2.04481 0.931794 1.44551C1.53553 0.835873 2.50766 0.835873 3.10116 1.44551L9.93666 8.3478C10.2232 8.63712 10.3869 9.02977 10.3869 9.44308C10.3869 9.85639 10.2232 10.249 9.93666 10.5383L3.00905 17.5336C2.7123 17.8333 2.31322 17.9883 1.92438 17.9883Z"
      fill="white"
    />
  </svg>
))`
  width: 15px;
  height: 25px;
`;

export const CapitalLevel = () => {
  const { level, maxLevel } = useFrogs();
  const { progress } = useFrogs();

  return (
    <div>
      <Row margin={'0 48px'} spread={true}>
        <LevelValue>
          {getLevelName(level)} <ArrowIcon />
        </LevelValue>
        <LevelValue>
          {level}/{maxLevel}
        </LevelValue>
      </Row>
      <Row margin={'0 40px'} style={{ justifyContent: 'right' }}>
        <Progress progress={progress} small={true} />
      </Row>
    </div>
  );
};
