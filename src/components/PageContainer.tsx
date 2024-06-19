import styled from 'styled-components';

const PageContainer = styled.div<{ header?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1080px;
  min-height: ${({ header }) => `calc(100vh / var(--scale) - ${header ? '400px' : '300px'})`};
  padding-top: 40px;
  padding-bottom: 260px;
  background: url('/img/bg.svg') center 40px no-repeat;
`;

export default PageContainer;
