import Coin from '../../Status/Coin';
import Row from '../../Row';
import Popup from '../Popup';
import styled from 'styled-components';
import { useFrogs } from '../../../contexts/FrogsContext';
import { useTranslation } from 'react-i18next';
import { compactAmount } from '../../../lib/utils';
import { isBalanceUpEvent } from '../../../lib/events';

const Header = styled.div`
  text-align: center;
  font-size: 81px;
  font-weight: 500;
  margin: 25px 0 70px;
`;

const Text = styled.div`
  color: #262626;
  text-align: center;
  font-size: 35px;
  font-weight: 600;
`;

const BalanceUp = () => {
  const { event } = useFrogs();
  const { t } = useTranslation();

  if (!isBalanceUpEvent(event)) throw new Error('Should not happen');

  return (
    <Popup>
      <Row>
        <Coin size={'large'} />
      </Row>
      <Header>{t('popup_BalanceUp.balanceUp')}</Header>
      <Row margin="70px">
        <Text>
          {t('popup_BalanceUp.balanceDiffSinceLast')}
          <br />+{compactAmount(event.balanceDiffSinceLast)}
        </Text>
      </Row>
    </Popup>
  );
};

export default BalanceUp;
