import React from 'react';
import PageContainer from '../components/PageContainer';
import FriendsList from '../components/pages/Friends/FriendsList';
import FriendsBonuses from '../components/pages/Friends/FriendsBonuses';

const Friends: React.FC = () => {
  return (
    <PageContainer>
      <FriendsBonuses />
      <FriendsList />
    </PageContainer>
  );
};

export default Friends;
