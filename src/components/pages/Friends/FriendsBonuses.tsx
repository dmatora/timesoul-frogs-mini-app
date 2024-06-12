import React from 'react';
import FriendsHeader from './Bonuses/FriendsHeader';
import FriendsBonusCard from './Bonuses/FriendsBonusCard';
import { useTranslation } from 'react-i18next';

const FriendsBonuses: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <FriendsHeader />
      <FriendsBonusCard />
      <FriendsBonusCard premium={true} />
      {/*<MoreBonuses>{t('friends.moreBonuses')}</MoreBonuses>*/}
      {/* ToDo implement MoreBonuses */}
    </>
  );
};

export default FriendsBonuses;
