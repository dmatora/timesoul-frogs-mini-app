import React from 'react';
import FriendsHeader from './Bonuses/FriendsHeader';
import FriendsBonusCard from './Bonuses/FriendsBonusCard';
import MoreBonuses from './Bonuses/MoreBonus';

const FriendsBonuses: React.FC = () => {
  return (
    <>
      <FriendsHeader />
      <FriendsBonusCard />
      <FriendsBonusCard premium={true} />
      <MoreBonuses>Больше бонусов</MoreBonuses>
    </>
  );
};

export default FriendsBonuses;
