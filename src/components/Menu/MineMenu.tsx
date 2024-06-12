import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react';
import TextButton from './Buttons/TextButton';
import { useTranslation } from 'react-i18next';

const MenuContainer = styled.div`
  background: black;
  display: flex;
  justify-content: space-between;
  border-radius: 90px;
  width: 950px;
  padding: 20px 25px;
  margin: 40px auto;

  & a {
    text-decoration: none;
  }
`;

const MineMenu = () => {
  const { t } = useTranslation();

  return (
    <MenuContainer>
      <NavLink to="/mine/markets" className={'active'}>
        {({ isActive }) => <TextButton active={isActive} label={t('mineMenu.markets')} />}
      </NavLink>
      <NavLink to="/mine/team">{({ isActive }) => <TextButton active={isActive} label={t('mineMenu.team')} />}</NavLink>
      <NavLink to="/mine/docs">
        {({ isActive }) => <TextButton active={isActive} label={t('mineMenu.legal')} />}
      </NavLink>
      <NavLink to="/mine/exclusive">
        {({ isActive }) => <TextButton active={isActive} label={t('mineMenu.specials')} />}
      </NavLink>
    </MenuContainer>
  );
};

export default MineMenu;
