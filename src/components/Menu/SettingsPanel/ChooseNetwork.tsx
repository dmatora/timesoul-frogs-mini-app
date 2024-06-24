import styled from 'styled-components';
import { UserIconInternal } from '../../UserIcon';
import React from 'react';
import { useFrogs } from '../../../contexts/FrogsContext';
import { useTranslation } from 'react-i18next';

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

const ChooseNetwork = () => {
  const { user, config } = useFrogs();
  const { t } = useTranslation();
  const network = config.networks?.find((network) => network.id === user.networkId);

  return (
    <Container>
      <UserIconInternal />
      <Text>{network?.title || t('settings.chooseNetwork')}</Text>
    </Container>
  );
};

export default ChooseNetwork;
