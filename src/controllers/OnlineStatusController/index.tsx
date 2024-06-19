import { notificationEmit } from "../NotificationsController";

// @see https://stackoverflow.com/a/30120481/2235085
let IS_ONLINE = true;

export const onlineStatusInit = () => {
  window.addEventListener('online', () => {
    if (IS_ONLINE) return;
     
    IS_ONLINE = true;

    notificationEmit({
      title: 'Connection Restored',
      subtitle: 'You\'re back online! Connection to the internet is restored',
    });
  });
  window.addEventListener('offline', async () => {
    if (!IS_ONLINE) return;
     
    IS_ONLINE = false;

    notificationEmit({
      title: 'Connection Lost',
      subtitle: 'You\'re currently offline. Please check your internet connection!',
    });
  });  
}