import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react';
import TextButton from './Buttons/TextButton';

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
  return (
    <MenuContainer>
      <NavLink to="/mine/markets" className={'active'}>
        {({ isActive }) => <TextButton active={isActive} label={'Рынки'} />}
      </NavLink>
      <NavLink to="/mine/team">
        {({ isActive }) => (
          <TextButton active={isActive} label={'PR и команда'} />
        )}
      </NavLink>
      <NavLink to="/mine/docs">
        {({ isActive }) => <TextButton active={isActive} label={'Документы'} />}
      </NavLink>
      <NavLink to="/mine/exclusive">
        {({ isActive }) => <TextButton active={isActive} label={'Эксклюзив'} />}
      </NavLink>
    </MenuContainer>
  );
};

export default MineMenu;
