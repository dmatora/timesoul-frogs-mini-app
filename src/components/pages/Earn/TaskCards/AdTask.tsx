import styled from 'styled-components';
import TaskCard from '../TaskCard';
import WebApp from '@twa-dev/sdk';
import { env } from '../../../../lib/env';
import { useTranslation } from 'react-i18next';

const TelegramIcon = styled((props) => (
  <svg width="112" height="113" viewBox="0 0 112 113" fill="none" {...props}>
    <g clipPath="url(#clip0_2099_17753)">
      <path
        d="M56 0.570312C86.929 0.570312 112 25.6447 112 56.5703C112 87.4959 86.929 112.57 56 112.57C25.071 112.57 0 87.4993 0 56.5703C0 25.6413 25.0744 0.570312 56 0.570312Z"
        fill="#222625"
      />
      <path
        d="M74.4936 79.4014C75.5219 76.2416 80.3515 44.7459 80.9455 38.535C81.1253 36.6547 80.5314 35.4057 79.3707 34.8457C77.9622 34.1703 75.8817 34.5063 73.4618 35.3786C70.1459 36.5733 27.7488 54.5747 25.3018 55.6166C22.9804 56.6043 20.7845 57.6768 20.7845 59.238C20.7845 60.3342 21.4361 60.9519 23.2281 61.59C25.0914 62.2552 29.7886 63.6773 32.5648 64.4443C35.2359 65.1842 38.2735 64.5393 39.9806 63.4838C41.7862 62.3604 62.6385 48.4113 64.1319 47.1861C65.6252 45.9643 66.8199 47.5289 65.5981 48.7541C64.3762 49.9759 50.064 63.8673 48.177 65.7917C45.8827 68.1267 47.5118 70.5466 49.0492 71.5173C50.8039 72.6237 63.4293 81.0916 65.3299 82.4491C67.2305 83.8101 69.1583 84.4244 70.9265 84.4244C72.6914 84.4244 73.6213 82.0962 74.5004 79.398L74.4936 79.4014Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_2099_17753">
        <rect width="112" height="112" fill="white" transform="translate(0 0.570312)" />
      </clipPath>
    </defs>
  </svg>
))`
  flex-shrink: 0;
  margin-right: 26px;
`;

const handleOnClick = async () => {
  WebApp.openTelegramLink(`https://t.me/${env.channelName}`);
};

const AdTask = () => {
  const { t } = useTranslation();

  return <TaskCard label={t('earn.connect')} Icon={TelegramIcon} reward={false} done={false} onClick={handleOnClick} />;
};

export default AdTask;
