import React from 'react';
import styled from 'styled-components';
import ExchangeButton from './Buttons/Exchange';
import Mine from './Buttons/Mine';
import FriendsButton from './Buttons/Friends';
import EarnButton from './Buttons/Earn';
import FoodButton from './Buttons/Food';
import { NavLink } from 'react-router-dom';
import { useFrogs } from '../../contexts/FrogsContext';

const FixedContainer = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const MenuContainer = styled.div`
  pointer-events: all;
  background: black;
  display: flex;
  justify-content: space-between;

  position: absolute;
  bottom: calc(40px * var(--scale));
  left: 50%;
  margin: 0 auto 0 -500px;

  border-radius: 90px;
  width: 950px;
  height: 140px;
  padding: 20px 25px;
  transform-origin: center 100%;
  transform: scale(var(--scale));
`;

const Menu = () => {
  const { updateUserTasks } = useFrogs();

  return (
    <FixedContainer>
      <MenuContainer>
        <NavLink to="/">{({ isActive }) => <ExchangeButton active={isActive} />}</NavLink>
        <NavLink to="/mine">{({ isActive }) => <Mine active={isActive} />}</NavLink>
        <NavLink to="/friends">{({ isActive }) => <FriendsButton active={isActive} />}</NavLink>
        <NavLink to="/earn" onClick={updateUserTasks}>
          {({ isActive }) => <EarnButton active={isActive} />}
        </NavLink>
        <NavLink to="/food">{({ isActive }) => <FoodButton active={isActive} />}</NavLink>
      </MenuContainer>
    </FixedContainer>
  );
};

export default Menu;
