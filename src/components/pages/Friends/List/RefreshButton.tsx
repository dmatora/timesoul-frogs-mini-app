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
  color: #999;
`;

const RefreshButton = () => {
  const [loading, setLoading] = useState(false);
  const { updateFriendsList, lastFriendsUpdate } = useFrogs();

  const coolDownSeconds = 60;
  const secondsLeft = Math.round(coolDownSeconds - (Date.now() - lastFriendsUpdate) / 1000);
  const coolDown = secondsLeft > 0 && secondsLeft < coolDownSeconds * 1000;
  useInterval(() => null, 1000);

  const handleOnclick = async () => {
    setLoading(true);
    await updateFriendsList();
    setLoading(false);
  };

  return (
    <Container>
      {!loading && coolDown && !!secondsLeft && <Seconds>{secondsLeft}</Seconds>}
      <RefreshIcon onClick={handleOnclick} isLoading={loading} disabled={loading || coolDown} />
    </Container>
  );
};

export default RefreshButton;
