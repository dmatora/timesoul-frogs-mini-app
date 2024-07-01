import React from 'react';
import PageContainer from '../components/PageContainer';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useFrogs } from '../contexts/FrogsContext';
import Option from '../components/pages/Settings/Option';
import { useNavigate } from 'react-router-dom';
import i18n, { languages } from '../lib/i18n';
import VenomIcon from '../components/pages/Settings/VenomIcon';
import EthereumIcon from '../components/pages/Settings/EthereumIcon';
import BitcoinIcon from '../components/pages/Settings/BitcoinIcon';

const Header = styled.div`
  margin: 50px 0 35px;
  text-align: center;
  font-size: 81px;
  font-weight: 500;
`;

const getNetworkIcon = (networkId: string) => {
  if (networkId === 'ethereum') return EthereumIcon;
  if (networkId === 'bitcoin') return BitcoinIcon;
  return VenomIcon;
};

const Settings = ({ selection }: { selection: 'network' | 'language' }) => {
  const { config, user, updateNetwork, updateCards } = useFrogs();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const header = selection === 'network' ? t('settings.chooseNetwork') : t('settings.chooseLanguage');

  const handleOnclick = async (id: string) => {
    if (selection === 'network') {
      await updateNetwork(id);
      navigate('/');
    }
    if (selection === 'language') {
      await i18n.changeLanguage(id);
      await updateCards();
      navigate('/');
    }
  };

  return (
    <PageContainer>
      <Header>{header}</Header>
      {selection === 'network' &&
        config.networks.map((network) => (
          <Option
            key={network.id}
            label={network.title}
            Icon={getNetworkIcon(network.id)}
            selected={user.networkId === network.id}
            onClick={() => handleOnclick(network.id)}
          />
        ))}
      {selection === 'language' &&
        Object.entries(languages).map(([languageId, language]) => (
          <Option
            key={languageId}
            label={`${language} (${languageId})`}
            selected={i18n.language.substring(0, 2) === languageId}
            onClick={() => handleOnclick(languageId)}
          />
        ))}
    </PageContainer>
  );
};

export default Settings;
