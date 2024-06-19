import styled from 'styled-components';
import { UserIconInternal } from '../../UserIcon';
import React from 'react';

const Container = styled.button`
  border: 0;
  height: 100px;
  background-color: #98e703;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  gap: 13px;
  flex-direction: row;
`;

const Text = styled.div`
  font-size: 24px;
`;

const ChooseNetwork = () => (
  <Container>
    <UserIconInternal />
    <Text>Выбрать сеть</Text>
  </Container>
);

export default ChooseNetwork;
