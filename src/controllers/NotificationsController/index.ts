import type {
    NotificationEventAddDetail,
    NotificationEventDismissDetail,
    NotificationText,
  } from './types';
    
const NOTIFICATION_STACK: number[] = [];

export const notificationEmit = ({ title, subtitle }: NotificationText) => {
  const index = (NOTIFICATION_STACK[NOTIFICATION_STACK.length - 1] || 0) + 1;
  NOTIFICATION_STACK.push(index);

  // Create type-safe event detail.
  const addDetail: NotificationEventAddDetail = {
    task: 'add',
    index,
    title,
    subtitle,
  };

  document.dispatchEvent(
    new CustomEvent('notification', {
      detail: addDetail,
    })
  );

  // After a period of time, dismiss the notification.
  setTimeout(() => {
    // Create type-safe event detail.
    const dismissDetail: NotificationEventDismissDetail = {
      task: 'dismiss',
      index,
    };

    document.dispatchEvent(
      new CustomEvent('notification', {
        detail: dismissDetail,
      })
    );
  }, 3000);
}