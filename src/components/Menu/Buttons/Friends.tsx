import React from 'react';
import styled from 'styled-components';
import ButtonContainer from './ButtonContainer';
import ButtonLabel from './ButtonLabel';
import { useTranslation } from 'react-i18next';

export const Icon = styled(({ active, ...props }) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="107" height="58" viewBox="0 0 107 58" fill="none">
    <path
      d="M88.41 23.33C94.706 23.33 99.81 18.2261 99.81 11.93C99.81 5.63398 94.706 0.530029 88.41 0.530029C82.1139 0.530029 77.01 5.63398 77.01 11.93C77.01 18.2261 82.1139 23.33 88.41 23.33Z"
      fill={active ? 'black' : 'white'}
    />
    <path
      d="M19.5999 23.33C25.896 23.33 30.9999 18.2261 30.9999 11.93C30.9999 5.63398 25.896 0.530029 19.5999 0.530029C13.3039 0.530029 8.19995 5.63398 8.19995 11.93C8.19995 18.2261 13.3039 23.33 19.5999 23.33Z"
      fill={active ? 'black' : 'white'}
    />
    <path
      d="M53.4601 27.83C60.9987 27.83 67.11 21.7187 67.11 14.18C67.11 6.64134 60.9987 0.530029 53.4601 0.530029C45.9214 0.530029 39.8101 6.64134 39.8101 14.18C39.8101 21.7187 45.9214 27.83 53.4601 27.83Z"
      fill={active ? 'black' : 'white'}
    />
    <path
      d="M106.56 40.9499C106.56 32.6499 99.8301 25.9199 91.5301 25.9199H84.8201C79.7501 25.9199 75.26 28.4299 72.54 32.2899C76.68 35.5899 79.3401 40.6699 79.3401 46.3799V48.4499H106.57V40.9499H106.56Z"
      fill={active ? 'black' : 'white'}
    />
    <path
      d="M34.74 31.9299C32 28.2799 27.63 25.9199 22.72 25.9199H16.01C7.70998 25.9199 0.97998 32.6499 0.97998 40.9499V48.4499H27.49V46.3799C27.49 40.4599 30.34 35.2099 34.75 31.9299H34.74Z"
      fill={active ? 'black' : 'white'}
    />
    <path
      d="M68.3999 34.8399C65.3199 32.3899 61.4299 30.9299 57.1899 30.9299H49.1499C45.1199 30.9299 41.4099 32.2499 38.4099 34.4899C33.9999 37.7699 31.1499 43.0199 31.1499 48.9399V57.9199H75.1899V48.9399C75.1899 43.2299 72.5299 38.1499 68.3899 34.8499L68.3999 34.8399Z"
      fill={active ? 'black' : 'white'}
    />
  </svg>
))`
  flex-shrink: 0;

  @media (min-width: 1080px) {
    width: 106px;
    height: 57px;
    margin-top: 11px;
  }

  @media (max-width: 1079px) {
    width: 9.814vw;
    height: 5.27vw;
    margin-top: 1.018vw;
  }
`;

const FriendsButton = ({ active = false }) => {
  const { t } = useTranslation();

  return (
    <ButtonContainer active={active}>
      <Icon active={active} />
      <ButtonLabel active={active} marginTop={11}>
        {t('system.friends')}
      </ButtonLabel>
    </ButtonContainer>
  );
};

export default FriendsButton;
