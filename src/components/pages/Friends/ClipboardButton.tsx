import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { notificationEmit } from '../../../controllers/NotificationsController';
import { env } from '../../../lib/env';
import { getTgUserId } from '../../../lib/utils';
import { useTranslation } from 'react-i18next';

const Container = styled.button`
  width: 170px;
  height: 170px;
  background-color: #98e703;
  border-radius: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 6px 0 0 black;
  border: none;
  flex-shrink: 0;
  &:active {
    position: relative;
    box-shadow: none;
    top: 6px;
    left: 5px;
  }
`;

const ClipIcon = styled.div`
  border: 2px solid black;
  width: 65px;
  height: 65px;
  background-color: #98e703;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 8px -8px 0 0 black;
`;

const ClipboardButton = () => {
  const { t } = useTranslation();

  const url = `${env.botUrl}?startapp=${getTgUserId()}`;
  const text = `${url}\n${t('friends.playWithMe')}`;

  const handleCopy = () => {
    notificationEmit({
      title: t('friends.inviteFriend'),
      subtitle: t('friends.linkCopied'),
    });
  };

  return (
    <CopyToClipboard text={text} onCopy={() => handleCopy()}>
      <Container>
        <ClipIcon />
      </Container>
    </CopyToClipboard>
  );
};

export default ClipboardButton;
