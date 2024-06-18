import React from 'react';
import PageContainer from '../components/PageContainer';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import FoodIcon from '../components/pages/Food/FoodIcon';

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fffd;
  border-radius: 95px 95px 0 0;
`;

const Container = styled.div`
  width: 100%;
  padding-top: 765px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  text-align: center;
  font-size: 45px;
  font-weight: 700;
`;

const Food: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Overlay>
        <Container>
          <Text>
            {t('system.coming1')}
            <br />
            {t('system.coming2')}
          </Text>
          <FoodIcon />
        </Container>
      </Overlay>
      <img src={'Food.png'} style={{ margin: '47px auto 0' }} />
    </PageContainer>
  );
};

export default Food;
