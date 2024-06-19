import React from 'react';
import styled from 'styled-components';
import UserIcon from '../../UserIcon';
import ChooseNetwork from './ChooseNetwork';
import Row from '../../Row';
import SettingsButton from './SettingsButton';
import WebApp from '@twa-dev/sdk';
import { useTranslation } from 'react-i18next';

const ScreenWrapper = styled.div`
  height: 100px;
  position: relative;
  width: 1000px;
  background: black;
  margin: 0 auto;
  padding: 0 40px;
`;

const Username = styled.div`
  color: white;
  font-size: 37px;
  font-weight: 400;
`;

const getUserName = (userTranslated: string) => {
  const { user } = WebApp.initDataUnsafe;
  if (!user) throw new Error('Must run inside telegram app');

  const { first_name, last_name, username, id } = user;

  if (first_name && last_name) {
    return `${first_name} ${last_name}`;
  }
  if (first_name && !last_name) {
    return first_name;
  }
  if (!first_name && last_name) {
    return last_name;
  }

  return username || `${userTranslated} ${id}`;
};

const Settings = () => {
  const { t } = useTranslation();

  return (
    <ScreenWrapper>
      <Row spread={true}>
        <Row gap="20px">
          <UserIcon light={true} />
          <Username>{getUserName(t('system.user'))}</Username>
        </Row>
        <Row gap="20px">
          <ChooseNetwork />
          <SettingsButton />
        </Row>
      </Row>
    </ScreenWrapper>
  );
};

export default Settings;
