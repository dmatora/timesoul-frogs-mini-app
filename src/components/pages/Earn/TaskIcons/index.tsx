import { UserTask } from '../../../../contexts/FrogsContext';
import React from 'react';
import { XIcon } from './XIcon';
import { TelegramIcon } from './TelegramIcon';
import styled from 'styled-components';

export const UrlIcon = styled.div<{ large?: boolean; url: string }>`
    background: ${({ url }) => `url('${url}'`});
  background-size: cover;
    border-radius: ${({ large }) => (large ? '' : '50% 50%')};
  flex-shrink: 0;
    margin-right: ${({ large }) => (large ? '' : '26px')};
    width: ${({ large }) => (large ? '350px' : '112px')};
    height: ${({ large }) => (large ? '350px' : '112px')};
`;

const getIcon = (task: UserTask) => {
  if (task.coverUrl) return ({ large }: { large?: boolean }) => <UrlIcon large={large} url={task.coverUrl} />;
  const isX = task.url.startsWith('https://x.com');
  if (isX) return XIcon;
  return TelegramIcon;
};

export default getIcon;
