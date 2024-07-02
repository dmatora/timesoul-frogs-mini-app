import styled from 'styled-components';
import React, { useState } from 'react';
import RefreshIcon from './RefreshIcon';
import { useFrogs } from '../../../../contexts/FrogsContext';
import { useInterval } from 'react-use';

const Container = styled.button`
  border: none;
`;
const Seconds = styled.div`
  position: absolute;
  font-size: 30px;
  width: 61px;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RefreshButton = () => {
  const [loading, setLoading] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const { updateFriendsList, lastFriendsUpdate } = useFrogs();

  const coolDown = Date.now() - lastFriendsUpdate < 60000;

  useInterval(() => {
    setSecondsLeft(Math.round(60 - (Date.now() - lastFriendsUpdate) / 1000));
  }, 1000);

  const handleOnclick = async () => {
    if (coolDown) return;
    setLoading(true);
    await updateFriendsList();
    setLoading(false);
  };

  return (
    <Container>
      {!loading && coolDown && !!secondsLeft && <Seconds>{secondsLeft}</Seconds>}
      <RefreshIcon onClick={handleOnclick} isLoading={loading} />
    </Container>
  );
};

export default RefreshButton;
