import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChooseNetwork from './ChooseNetwork';
import Row from '../../Row';
import SettingsButton from './SettingsButton';
import WebApp from '@twa-dev/sdk';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { CapitalLevel } from '../../pages/Tap/Levels/CapitalLevel';

const ScreenWrapper = styled.div<{ expanded: boolean }>`
  height: ${({ expanded }) => (expanded ? '100px' : '0')};
  transition: height 300ms ease-in;
  overflow: hidden;
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
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    setTimeout(() => {
      setExpanded(true);
    }, 300);
  }, []);

  return (
    <ScreenWrapper expanded={expanded}>
      <Row spread={true}>
        <NavLink to="/leaderboard">
          <CapitalLevel />
        </NavLink>
        <Row gap="20px">
          <NavLink to="/network">
            <ChooseNetwork />
          </NavLink>
          <NavLink to="/language">
            <SettingsButton />
          </NavLink>
        </Row>
      </Row>
    </ScreenWrapper>
  );
};

export default Settings;
