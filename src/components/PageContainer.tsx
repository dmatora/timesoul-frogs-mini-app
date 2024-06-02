import styled from 'styled-components';

const PageContainer = styled.div<{ minHeight?: string }>`
  color: black;
  font-family: Geologica, sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1080px;
  height: 1940px; // 2020px - 2x40 ToDo support very long height devices, check iPhone XR in Chrome
  min-height: ${(props) => props.minHeight || '1940px'};
  padding-top: 40px;
  padding-bottom: 40px;
  background: black url('/img/bg.svg') center 40px no-repeat;
  & button {
    font-family: Geologica, sans-serif;
    color: black;
  }
`;

export default PageContainer;
