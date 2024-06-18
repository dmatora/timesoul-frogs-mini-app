import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import WebApp from '@twa-dev/sdk';

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

const FriendsList: React.FC = () => {
  const { friends, updateFriendsList } = useFrogs();
  const { t } = useTranslation();

  const urlInvitation = `https://t.me/share/url?url=${encodeURIComponent(
    `${env.botUrl}?startapp=${getTgUserId()}`
  )}&text=${encodeURIComponent(t('friends.playWithMe'))}`;

  return (
    <Container>
      <Row spread={true} margin="0 0 20px">
        <FriendsListLabel>
          {t('friends.listOfYourFriends')} ({friends.length})
        </FriendsListLabel>
        <RefreshIcon onClick={updateFriendsList} />
      </Row>
      {friends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
      <Row margin="30px 0 37px" gap="12px">
        <InviteFriendButton onClick={() => WebApp.openTelegramLink(urlInvitation)}>
          {t('friends.inviteFriend')} <ProfileIcon />
        </InviteFriendButton>
        <ClipboardButton url={urlInvitation} />
      </Row>
    </Container>
  );
};

export default FriendsList;
