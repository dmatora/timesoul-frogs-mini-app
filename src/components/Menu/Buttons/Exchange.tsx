import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ButtonContainer from './ButtonContainer';
import ButtonLabel from './ButtonLabel';
import { useFrogs } from '../../../contexts/FrogsContext';

export const VenomIcon = styled(({ active, ...props }) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="66" height="64" viewBox="0 0 66 64" fill="none">
    <path
      d="M56.4782 0.148526C54.5893 -0.151246 52.6248 0.0361119 50.8115 0.635656C48.9981 1.2352 47.3737 2.24693 46.0892 3.55843C43.6336 6.06903 42.8781 9.36652 43.4825 12.664C44.0114 15.6243 44.7292 18.6595 44.8803 21.5073C45.107 25.8165 44.3892 30.1257 42.8025 34.2101C41.367 37.8824 39.2892 40.7302 34.8314 41.3672C34.4913 41.4047 33.3202 41.4421 32.9802 41.4796C32.6402 41.4796 31.5824 41.4421 31.2424 41.3672C26.8224 40.7302 24.7068 37.8824 23.2713 34.2101C21.6468 30.1632 20.9668 25.854 21.1935 21.5073C21.3446 18.6595 22.0624 15.6243 22.5913 12.664C23.1957 9.36652 22.4024 6.06903 19.9846 3.55843C18.7001 2.24693 17.0757 1.2352 15.2623 0.635656C13.3734 -0.00135968 11.409 -0.151246 9.52007 0.148526C3.81558 1.01037 0 5.65684 0 10.5281C0 12.4017 0.528892 14.2753 1.58668 15.8491C3.36225 18.547 6.27115 20.4956 8.80228 22.5565C10.4645 23.9055 13.3734 27.8025 14.809 31.9618C15.6779 34.5099 16.3579 37.058 17.0757 39.681C18.0579 43.3157 19.3801 51.2972 20.2868 54.9319C22.0624 62.2014 27.4646 63.8501 32.8669 64H33.0558C38.458 63.8501 43.9359 62.2014 45.7114 54.9319C46.5803 51.2972 47.9403 43.3157 48.9226 39.681C49.6026 37.0954 50.3203 34.5099 51.1892 31.9618C52.6248 27.765 55.4959 23.9055 57.1959 22.5565C59.7271 20.4956 62.636 18.547 64.4116 15.8491C65.4693 14.2378 66.036 12.4017 65.9982 10.5281C65.9982 5.61937 62.1826 0.9729 56.4782 0.148526Z"
      fill={active ? 'black' : 'white'}
    />
  </svg>
))`
  flex-shrink: 0;

  @media (min-width: 1080px) {
    width: 66px;
    height: 64px;
    margin-top: 10px;
  }

  @media (max-width: 1079px) {
    width: 6.111vw;
    height: 5.925vw;
    margin-top: 0.925vw;
  }
`;

const EthereumIcon = styled(({ active, ...props }) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="53" height="84" viewBox="0 0 53 84" fill="none">
    <g clipPath="url(#clip0_2446_174)">
      <path d="M26.5018 84.0001V62.8976L0 47.666L26.5018 84.0001Z" fill={active ? 'black' : 'white'} />
      <path d="M52.9701 47.666L26.4683 62.8976V84.0001L52.9701 47.666Z" fill={active ? 'black' : 'white'} />
      <path d="M26.5018 0L0 42.779L26.5018 58.0178L53 42.779L26.5018 0Z" fill={active ? 'black' : 'white'} />
    </g>
    <defs>
      <clipPath id="clip0_2446_174">
        <rect width="53" height="84" fill={active ? 'black' : 'white'} />
      </clipPath>
    </defs>
  </svg>
))`
  flex-shrink: 0;

  @media (min-width: 1080px) {
    width: 66px;
    height: 64px;
    margin-top: 10px;
  }

  @media (max-width: 1079px) {
    width: 6.111vw;
    height: 5.925vw;
    margin-top: 0.925vw;
  }
`;

const BitcoinIcon = styled(({ active, ...props }) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="27 19 55 73">
    <path
      d="M82.1352 48.8801C83.271 41.2954 77.4939 37.2181 69.5982 34.4991L72.1602 24.2238L65.9048 22.6645L63.4104 32.669C61.7439 32.2606 60.0752 31.8675 58.4 31.4897L60.9118 21.4197L54.6585 19.8604L52.0965 30.1313C50.7358 29.8212 49.3991 29.5154 48.1017 29.1922L48.1082 29.1594L39.483 27.0061L37.8186 33.6867C37.8186 33.6867 42.46 34.7502 42.3617 34.8158C44.8953 35.4491 45.3518 37.1241 45.2754 38.4541L42.3573 50.1577C42.5321 50.2014 42.7592 50.2691 43.0082 50.3652L42.3464 50.2014L38.2555 66.5982C37.9453 67.3669 37.159 68.5222 35.3877 68.0832C35.451 68.1749 30.8424 66.9476 30.8424 66.9476L27.7366 74.1086L35.8769 76.1397C37.3906 76.5175 38.8758 76.9149 40.337 77.2884L37.7488 87.6794L43.9955 89.2387L46.5575 78.9547C48.2633 79.4199 49.9211 79.8458 51.5417 80.2498L48.9863 90.4836L55.2395 92.0429L57.8299 81.6715C68.4952 83.6894 76.5154 82.8748 79.8921 73.2329C82.6114 65.4669 79.7567 60.9877 74.1456 58.0635C78.2321 57.12 81.3096 54.4316 82.1309 48.8801H82.1352ZM67.8421 68.9153C65.9091 76.6813 52.8326 72.486 48.5909 71.4312L52.0266 57.6638C56.2661 58.723 69.8624 60.8174 67.8421 68.9153ZM69.7773 48.7687C68.0147 55.8315 57.1288 52.2412 53.597 51.3632L56.7116 38.8756C60.2434 39.7558 71.6141 41.3981 69.7773 48.7666V48.7687Z"
      fill={active ? 'black' : 'white'}
    />
  </svg>
))`
  flex-shrink: 0;

  @media (min-width: 1080px) {
    width: 66px;
    height: 64px;
    margin-top: 10px;
  }

  @media (max-width: 1079px) {
    width: 6.111vw;
    height: 5.925vw;
    margin-top: 0.925vw;
  }
`;

const getNetworkIcon = (networkId: string) => {
  if (networkId === 'ethereum') return EthereumIcon;
  if (networkId === 'bitcoin') return BitcoinIcon;
  return VenomIcon;
};

const ExchangeButton = ({ active = false }) => {
  const { t } = useTranslation();
  const { user } = useFrogs();
  const Icon = getNetworkIcon(user.networkId || 'venom');

  return (
    <ButtonContainer active={active}>
      <Icon active={active} />
      <ButtonLabel active={active} marginTop={10}>
        {t('menu.network')}
      </ButtonLabel>
    </ButtonContainer>
  );
};

export default ExchangeButton;
