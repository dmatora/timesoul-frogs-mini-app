import React from 'react';
import styled from 'styled-components';
import Row from '../../Row';
import FriendCard from './List/FriendCard';
import RefreshIcon from './List/RefreshIcon';
import ProfileIcon from './List/ProfileIcon';
import { getTgUserId } from '../../../lib/utils';
import { useFrogs } from '../../../contexts/FrogsContext';
import { env } from '../../../lib/env';
import ClipboardButton from './ClipboardButton';

const Container = styled.div`
  margin: 20px auto 30px;
  width: 1000px;
`;

const FriendsListLabel = styled.div`
  color: #262626;
  font-size: 40px;
  font-weight: 600;
`;

const InviteFriendButton = styled.button`
  border: none;
  width: 100%;
  height: 170px;
  background-color: #98e703;
  border-radius: 55px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  box-shadow: 4px 7px 0 0 black;
  margin: 0 auto;

  &:active {
    position: relative;
    box-shadow: none;
    top: 7px;
    left: 4px;
  }
`;

const handleInviteFriend = () => {
  const url = `https://t.me/share/url?url=${encodeURIComponent(
    `${env.botUrl}?startapp=${getTgUserId()}`
  )}&text=${encodeURIComponent(
    'Играй со мной, стань генеральным директором криптобиржи и получи токены через аирдроп!\n' +
      '💸 +5k монет в качестве первого подарка\n' +
      '🔥 +25k монет, если у тебя есть Telegram Premium\n'
  )}`;
  window.open(url, '_blank');
};

const FriendsList: React.FC = () => {
  const { friends, updateFriendsList } = useFrogs();

  return (
    <Container>
      <Row spread={true} margin="0 0 20px">
        <FriendsListLabel>Список ваших друзей</FriendsListLabel>
        <RefreshIcon onClick={updateFriendsList} />
      </Row>
      {friends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
      <Row margin="30px 0 37px" gap="12px">
        <InviteFriendButton onClick={handleInviteFriend}>
          Пригласить друга <ProfileIcon />
        </InviteFriendButton>
        <ClipboardButton />
      </Row>
    </Container>
  );
};

export default FriendsList;
