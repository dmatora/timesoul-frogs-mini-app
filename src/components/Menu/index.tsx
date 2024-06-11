import React from 'react';
import styled from 'styled-components';
import ExchangeButton from './Buttons/Exchange';
import Mine from './Buttons/Mine';
import FriendsButton from './Buttons/Friends';
import EarnButton from './Buttons/Earn';
import { NavLink } from 'react-router-dom';

const MenuContainer = styled.div`
  background: black;
  display: flex;
  justify-content: space-between;
  left: 50%;
  position: fixed;
  z-index: 1;

  @media (min-width: 1080px) {
    border-radius: 90px;
    //width: 950px;
    //padding: 20px 25px;
    width: 800px;
    padding: 20px 100px;
    margin: 0 auto 0 -500px;
    bottom: 40px;
  }

  @media (max-width: 1079px) {
    border-radius: 8.333vw;
    //width: 87.962vw;
    //padding: 1.851vw 2.314vw;
    width: 74.074vw;
    padding: 1.851vw 9.259vw;
    margin: 0 auto 0 -46.296vw;
    bottom: 3.703vw;
  }
`;

const Menu = () => {
  return (
    <MenuContainer>
      <NavLink to="/">{({ isActive }) => <ExchangeButton active={isActive} />}</NavLink>
      <NavLink to="/mine">{({ isActive }) => <Mine active={isActive} />}</NavLink>
      <NavLink to="/friends">{({ isActive }) => <FriendsButton active={isActive} />}</NavLink>
      <NavLink to="/earn">{({ isActive }) => <EarnButton active={isActive} />}</NavLink>
      {/*<NavLink to="/food">{({ isActive }) => <FoodButton active={isActive} />}</NavLink>*/}
      {/* ToDo: implement food */}
    </MenuContainer>
  );
};

export default Menu;
