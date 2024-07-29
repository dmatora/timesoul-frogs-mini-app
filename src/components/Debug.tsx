import styled from 'styled-components';
import { loadEruda } from '../lib/utils';
import React, { useCallback, useEffect, useState } from 'react';
import { notificationEmit } from '../controllers/NotificationsController';

const Debug = styled((props) => {
  const [, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);

  const handleClick = useCallback(() => {
    if (localStorage.getItem('debug') === 'on') return;
    const currentTime = Date.now();
    if (currentTime - lastClickTime < 500) {
      // 500ms threshold for consecutive clicks
      setClickCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount === 5) {
          notificationEmit({
            title: `You are now ${10 - newCount} tap${10 - newCount > 1 ? 's' : ''} away from debug mode`,
          });
        } else if (newCount === 10) {
          notificationEmit({
            title: 'Debug mode is on!',
          });
          localStorage.setItem('debug', 'on');
          loadEruda();
          return 0;
        }
        return newCount;
      });
    } else {
      setClickCount(1);
    }
    setLastClickTime(currentTime);
  }, [lastClickTime]);

  useEffect(() => {
    console.log('here');
    if (localStorage.getItem('debug') === 'on') loadEruda();
  }, []);

  return <div {...props} onClick={handleClick} />;
})``;

export default Debug;
