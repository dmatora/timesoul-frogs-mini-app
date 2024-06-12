import React from 'react';
import styled from 'styled-components';
import ButtonContainer from './ButtonContainer';
import ButtonLabel from './ButtonLabel';
import { useTranslation } from 'react-i18next';

export const Icon = styled(({ active, ...props }) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
    <path
      d="M59.74 53.3798C47.25 40.8498 34.75 28.3098 22.26 15.7798C22.42 15.6398 22.56 15.4998 22.73 15.3598C33.35 6.35979 44.2 2.46979 50.62 0.709786C47.53 0.269786 31.14 -1.76021 16.81 9.43979C16.65 9.56979 16.5 9.69979 16.34 9.82979C14.15 7.63979 11.97 5.44979 9.78 3.24979C9.53 3.17979 7.09 2.51979 5.12 4.09979C3.44 5.43979 2.79999 7.83979 3.57999 10.0398L9.87 16.3298C-1.45 30.6298 0.0399974 48.3398 0.179997 49.7198C1.87 44.2398 6.03001 32.9898 15.72 22.1698L53.15 59.5998C54.95 60.3798 57.04 60.0298 58.47 58.7098C59.93 57.3598 60.44 55.2398 59.73 53.3598L59.74 53.3798Z"
      fill={active ? 'black' : 'white'}
    />
  </svg>
))`
  flex-shrink: 0;

  @media (min-width: 1080px) {
    width: 60px;
    height: 60px;
    margin-top: 13px;
  }

  @media (max-width: 1079px) {
    width: 5.555vw;
    height: 5.555vw;
    margin-top: 1.203vw;
  }
`;

const MineButton = ({ active = false }) => {
  const { t } = useTranslation();

  return (
    <ButtonContainer active={active}>
      <Icon active={active} />
      <ButtonLabel active={active} marginTop={13}>
        {t('menu.mine')}
      </ButtonLabel>
    </ButtonContainer>
  );
};

export default MineButton;
