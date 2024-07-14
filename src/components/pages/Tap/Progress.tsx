import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 15px 0 0;
`;

const ProgressBarBackground = styled.div<{ small: boolean }>`
  width: ${({ small }) => (small ? '400px' : '1000px')};
  background-color: #ffffff;
  position: relative;
  border: 1px solid black;
  border-radius: 18px;
  height: 36px;
`;

const ProgressBarFill = styled.div<{ small: boolean }>`
  background-color: ${({ small }) => (small ? '#98e703' : 'black')};
  border-radius: 18px;
  height: 36px;
  width: ${({ small }) => (small ? '400px' : '1000px')};
`;

export const Progress = ({ small = false, progress }: { small?: boolean; progress: number }) => (
  <ProgressBarContainer>
    <ProgressBarBackground small={small}>
      <div style={{ width: progress * (small ? 4 : 10), overflowX: 'hidden', transition: 'width 300ms ease-in' }}>
        <ProgressBarFill small={small} />
      </div>
    </ProgressBarBackground>
  </ProgressBarContainer>
);
export default Progress;
