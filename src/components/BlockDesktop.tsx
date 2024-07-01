import styled from 'styled-components';
import QRCode from 'react-qr-code';

import { env } from '../lib/env';
import { getInvitedBy } from '../lib/utils';

const { channelName } = env;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 0 50px;

  h1 {
    font-size: 26px;
    font-weight: 400;
  }
  h2 {
    font-size: 18px;
    font-weight: 400;
  }
  #qr {
    background: white;
    padding: 10px;
    border-radius: 20px;
    margin: 20px 0;
  }
`;

const BlockDesktop = () => {
  const invitedBy = getInvitedBy();
  const url = invitedBy ? `${env.botUrl}/?startapp=${getInvitedBy()}` : env.botUrl;

  return (
    <Container>
      <h1>Play on your mobile</h1>
      <div id="qr">
        <QRCode bgColor="#000" size={256} fgColor="#FFF" value={url} />
      </div>
      <h2>@{channelName}</h2>
    </Container>
  );
};

export default BlockDesktop;
