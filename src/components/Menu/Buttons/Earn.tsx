import React from 'react';
import styled from 'styled-components';
import ButtonContainer from './ButtonContainer';
import ButtonLabel from './ButtonLabel';
import { useTranslation } from 'react-i18next';

export const Icon = styled(({ active, ...props }) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="76" height="66" viewBox="0 0 76 66" fill="none">
    <path
      d="M75.34 36.3799L75.3 36.4899C75.3 36.4899 75.3 36.4399 75.3 36.4199C75.3 24.9599 63.14 15.6799 48.15 15.6799C33.16 15.6799 21 24.9699 21 36.4199V44.1399C21 44.2099 21 44.2899 21 44.3599C21 55.8199 33.16 65.0999 48.16 65.0999C63.16 65.0999 75.32 55.8099 75.32 44.3599C75.32 44.2699 75.32 44.1799 75.32 44.0899H75.36V36.3799H75.34Z"
      fill={active ? 'black' : 'white'}
    />
    <path
      d="M46.64 62.38C42.57 62.22 38.7499 61.33 35.4199 59.89V56.52C38.9199 57.81 42.74 58.56 46.64 58.7V62.38Z"
      fill={active ? '#98E703' : '#262626'}
    />
    <path
      d="M48.45 58.7099C53.07 58.6499 57.4699 57.7399 61.3799 56.1599V59.4899C57.6299 61.2699 53.2 62.3199 48.45 62.3899V58.6999V58.7099Z"
      fill={active ? '#98E703' : '#262626'}
    />
    <path
      d="M23.8899 48.8999C25.4399 50.6499 27.3099 52.2299 29.4399 53.5899C30.7399 54.4199 32.1399 55.1599 33.5899 55.7899V59.0299C28.9599 56.6099 25.4799 53.0499 23.8799 48.8999H23.8899Z"
      fill={active ? '#98E703' : '#262626'}
    />
    <path
      d="M63.1899 58.5599V55.3799C66.6899 53.7199 69.7199 51.4899 72.0599 48.8499C70.5799 52.7599 67.4099 56.1499 63.1899 58.5599Z"
      fill={active ? '#98E703' : '#262626'}
    />
    <path
      d="M55.11 21.6399L55.07 21.7499C55.07 21.7499 55.07 21.6999 55.07 21.6799C55.07 10.2199 42.91 0.939941 27.92 0.939941C12.93 0.939941 0.77002 10.2299 0.77002 21.6799V29.3999C0.77002 29.4699 0.77002 29.5499 0.77002 29.6199C0.77002 41.0799 12.93 50.3599 27.93 50.3599C42.93 50.3599 55.09 41.0699 55.09 29.6199C55.09 29.5299 55.09 29.4399 55.09 29.3499H55.13V21.6399H55.11Z"
      fill={active ? 'black' : 'white'}
    />
    <path
      d="M26.4 47.64C22.33 47.48 18.5099 46.59 15.1799 45.15V41.78C18.6799 43.07 22.5 43.82 26.4 43.96V47.64Z"
      fill={active ? '#98E703' : '#262626'}
    />
    <path
      d="M28.22 43.9699C32.84 43.9099 37.24 42.9999 41.15 41.4199V44.7499C37.4 46.5299 32.97 47.5799 28.22 47.6499V43.9599V43.9699Z"
      fill={active ? '#98E703' : '#262626'}
    />
    <path
      d="M3.65985 34.1599C5.20985 35.9099 7.0799 37.4899 9.2099 38.8499C10.5099 39.6799 11.9099 40.4199 13.3599 41.0499V44.2899C8.72986 41.8699 5.2499 38.3099 3.6499 34.1599H3.65985Z"
      fill={active ? '#98E703' : '#262626'}
    />
    <path
      d="M42.96 43.8099V40.6299C46.46 38.9699 49.49 36.7399 51.83 34.0999C50.35 38.0099 47.18 41.3999 42.96 43.8099Z"
      fill={active ? '#98E703' : '#262626'}
    />
  </svg>
))`
  flex-shrink: 0;

  @media (min-width: 1080px) {
    width: 75px;
    height: 64px;
    margin-top: 11px;
  }

  @media (max-width: 1079px) {
    width: 6.944vw;
    height: 5.925vw;
    margin-top: 1.018vw;
  }
`;

const EarnButton = ({ active = false }) => {
  const { t } = useTranslation();

  return (
    <ButtonContainer active={active}>
      <Icon active={active} />
      <ButtonLabel active={active} marginTop={11}>
        {t('menu.earn')}
      </ButtonLabel>
    </ButtonContainer>
  );
};

export default EarnButton;
