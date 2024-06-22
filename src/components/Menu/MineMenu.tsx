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
      <NavLink to="/mine/activities" className={'active'}>
        {({ isActive }) => <TextButton active={isActive} label={t('mineMenu.activities')} />}
      </NavLink>
      <NavLink to="/mine/investments">
        {({ isActive }) => <TextButton active={isActive} label={t('mineMenu.investments')} />}
      </NavLink>
      <NavLink to="/mine/web3">{({ isActive }) => <TextButton active={isActive} label={t('mineMenu.web3')} />}</NavLink>
      <NavLink to="/mine/achievements">
        {({ isActive }) => <TextButton active={isActive} label={t('mineMenu.achievements')} />}
      </NavLink>
    </MenuContainer>
  );
};

export default MineMenu;
