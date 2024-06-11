import React from 'react';
import FriendsHeader from './Bonuses/FriendsHeader';
import FriendsBonusCard from './Bonuses/FriendsBonusCard';

const FriendsBonuses: React.FC = () => {
  return (
    <>
      <FriendsHeader />
      <FriendsBonusCard />
      <FriendsBonusCard premium={true} />
      {/*<MoreBonuses>Больше бонусов</MoreBonuses>*/}
      {/* ToDo implement MoreBonuses */}
    </>
  );
};

export default FriendsBonuses;
