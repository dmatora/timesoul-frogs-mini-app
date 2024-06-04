import React from 'react';
import styled from 'styled-components';
import { useFrogs } from '../../../contexts/FrogsContext';

const shouldForwardProp = (prop: string | number) => prop !== 'progress';

const ProgressBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 15px 0 0;
`;

const ProgressBarBackground = styled.div`
  width: 1000px;
  background-color: #ffffff;
  position: relative;
  border: 1px solid black;
  border-radius: 18px;
  height: 36px;
`;

const ProgressBarFill = styled.div.withConfig({
  shouldForwardProp,
})`
  background-color: black;
  border-radius: 18px;
  height: 36px;
  width: 1000px;
`;

export const Progress = () => {
  const { progress } = useFrogs();

  return (
    <ProgressBarContainer>
      <ProgressBarBackground>
        <div style={{ width: progress * 10, overflowX: 'hidden' }}>
          <ProgressBarFill />
        </div>
      </ProgressBarBackground>
    </ProgressBarContainer>
  );
};

export default Progress;
