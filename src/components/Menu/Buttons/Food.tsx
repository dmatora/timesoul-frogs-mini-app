import React from 'react';
import styled from 'styled-components';
import ButtonContainer from './ButtonContainer';
import ButtonLabel from './ButtonLabel';
import { useTranslation } from 'react-i18next';

export const Icon = styled(({ active, ...props }) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="66" viewBox="0 0 64 66" fill="none">
    <path
      d="M62.3301 28.0602C62.3101 27.9402 62.2801 27.8202 62.2601 27.6902C62.0801 27.7302 61.9101 27.7702 61.7301 27.8002C60.7801 27.9502 59.7801 27.8802 58.8001 27.5502C55.5701 26.4502 52.4501 22.9202 53.5501 19.6602C53.7101 19.2002 53.2201 18.7702 53.4601 18.3702C52.6501 18.4302 51.8201 18.3402 51.0001 18.0602C49.0701 17.4102 47.6801 15.8902 47.1101 14.0802C46.8501 13.2602 46.7501 12.3902 46.8501 11.5002C45.7101 12.6902 45.6101 13.4602 44.0301 13.6802C43.0401 13.8102 42.0201 13.7302 41.0301 13.3902C37.4001 12.1602 35.5101 8.04022 36.8201 4.19022C36.9201 3.91022 37.0301 3.63022 37.1501 3.37022C37.1501 3.36022 37.1601 3.35023 37.1701 3.33023C22.0101 0.250226 7.26007 8.86022 2.17007 23.8902C-3.35993 40.2002 5.3901 57.9002 21.7001 63.4302C24.0901 64.2402 26.5101 64.7402 28.9201 64.9602C42.9401 66.2302 56.5301 57.8302 61.2501 43.9002C63.0501 38.6002 63.3301 33.1502 62.3501 28.0302L62.3301 28.0602ZM41.5501 37.2602C40.1201 41.4902 36.2301 44.1902 32.0201 44.3202C30.8101 44.3602 29.5801 44.1802 28.3701 43.7702C22.9301 41.9302 20.0201 36.0302 21.8601 30.5902C23.7001 25.1502 29.6001 22.2402 35.0401 24.0802H35.0601C40.4801 25.9302 43.3901 31.8202 41.5501 37.2502V37.2602Z"
      fill={active ? 'black' : 'white'}
    />
    <path
      d="M62.5701 24.5403C62.3901 24.5803 62.22 24.6203 62.04 24.6503C62.23 24.7503 62.4401 24.8303 62.6501 24.9103C62.6301 24.7903 62.6001 24.6703 62.5801 24.5403H62.5701Z"
      fill={active ? 'black' : 'white'}
    />
    <path
      d="M62.64 24.9002C62.43 24.8202 62.2301 24.7402 62.0301 24.6402C61.0801 24.7902 60.08 24.7202 59.1 24.3902C55.87 23.2902 54.14 19.7602 55.24 16.5002C55.4 16.0402 55.6 15.6102 55.85 15.2102C55.04 15.2702 54.21 15.1802 53.39 14.9002C51.46 14.2502 50.07 12.7302 49.5 10.9202C49.24 10.1002 49.14 9.23023 49.24 8.34023C48.1 9.53023 46.6101 10.3002 45.0301 10.5202C44.0401 10.6502 43.0201 10.5702 42.0301 10.2302C38.4001 9.00023 36.51 4.88023 37.82 1.03023C37.92 0.750231 38.0301 0.470231 38.1501 0.210231C24.2401 -0.909769 10.82 7.47023 6.14005 21.2902C0.610045 37.6002 9.36001 55.3002 25.67 60.8302C26.85 61.2302 53.48 67.1602 61.54 40.7502C63.17 35.4002 63.62 30.0002 62.64 24.8802V24.9002ZM41.86 34.1002C40.43 38.3302 36.54 41.0302 32.33 41.1602C31.12 41.2002 29.89 41.0202 28.68 40.6102C23.24 38.7702 20.33 32.8702 22.17 27.4302C24.01 21.9902 29.91 19.0802 35.35 20.9202H35.37C40.79 22.7702 43.7 28.6602 41.86 34.0902V34.1002Z"
      fill={active ? 'black' : 'white'}
    />
    <path
      d="M16.6035 40.6925L15.0518 41.3362L17.0404 46.1301L18.5922 45.4864L16.6035 40.6925Z"
      fill={active ? '#98E703' : '#262626'}
    />
    <path
      d="M42.5556 16.352L42.4094 18.0256L47.5798 18.4771L47.7259 16.8034L42.5556 16.352Z"
      fill={active ? '#98E703' : '#262626'}
    />
    <path
      d="M15.8952 25.8003L11.5029 28.5652L12.3979 29.9869L16.7901 27.2221L15.8952 25.8003Z"
      fill={active ? '#98E703' : '#262626'}
    />
    <path
      d="M51.8418 41.615L51.1875 43.1624L55.9677 45.1836L56.622 43.6362L51.8418 41.615Z"
      fill={active ? '#98E703' : '#262626'}
    />
    <path
      d="M25.7512 12.3361L24.938 13.8062L29.4795 16.3184L30.2927 14.8483L25.7512 12.3361Z"
      fill={active ? '#98E703' : '#262626'}
    />
    <path
      d="M43.2754 50.5389L42.0598 51.6985L45.6422 55.4538L46.8578 54.2942L43.2754 50.5389Z"
      fill={active ? '#98E703' : '#262626'}
    />
    <path
      d="M29.3798 51.2032L24.9875 53.968L25.8825 55.3898L30.2748 52.6249L29.3798 51.2032Z"
      fill={active ? '#98E703' : '#262626'}
    />
    <path
      d="M54.1925 29.2888L49.8003 32.0537L50.6953 33.4755L55.0875 30.7106L54.1925 29.2888Z"
      fill={active ? '#98E703' : '#262626'}
    />
  </svg>
))`
  flex-shrink: 0;
  width: 63px;
  height: 65px;
  margin-top: 11px;
`;

const FoodButton = ({ active = false }) => {
  const { t } = useTranslation();

  return (
    <ButtonContainer active={active}>
      <Icon active={active} />
      <ButtonLabel active={active} marginTop={11}>
        {t('menu.food')}
      </ButtonLabel>
    </ButtonContainer>
  );
};

export default FoodButton;
