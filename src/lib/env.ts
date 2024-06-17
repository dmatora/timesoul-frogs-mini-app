const {
  VITE_API_BACK_URL: backUrl,
  VITE_API_TAP_URL: tapUrl,
  VITE_TG_CHANNEL_URL: channelUrl,
  VITE_TG_CHANNEL_TASK: channelTask,
  VITE_TG_BOT_URL: botUrl,
} = import.meta.env;

if (!backUrl) throw new Error('missing VITE_API_BACK_URL');
if (!tapUrl) throw new Error('missing VITE_API_TAP_URL');
if (!channelUrl) throw new Error('missing VITE_TG_CHANNEL_URL');
if (!channelTask) throw new Error('missing VITE_TG_CHANNEL_TASK');
if (!botUrl) throw new Error('missing VITE_TG_BOT_URL');

export const env = { backUrl, tapUrl, channelUrl, channelTask, botUrl };
