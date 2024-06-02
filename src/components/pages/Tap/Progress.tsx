import React from 'react';
import styled from 'styled-components';

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
  position: absolute;
  background-color: black;
  transition: width 0.5s ease-in-out;
  border-radius: 18px;
  height: 36px;
  width: ${({ progress }: { progress: number }) => progress}%;
`;

export const Progress = () => {
  const progress = 50;

  return (
    <ProgressBarContainer>
      <ProgressBarBackground>
        <ProgressBarFill progress={progress} />
      </ProgressBarBackground>
    </ProgressBarContainer>
  );
};

export default Progress;
