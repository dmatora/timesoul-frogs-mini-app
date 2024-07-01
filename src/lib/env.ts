const {
  VITE_API_BACK_URL: backUrl,
  VITE_API_TAP_URL: tapUrl,
  VITE_TG_CHANNEL_NAME: channelName,
  VITE_TG_CHANNEL_TASK: channelTask,
  VITE_TG_BOT_URL: botUrl,
  VITE_SENTRY_DSN: sentryDsn,
  PROD: isProd,
} = import.meta.env;

if (!backUrl) throw new Error('missing VITE_API_BACK_URL');
if (!tapUrl) throw new Error('missing VITE_API_TAP_URL');
if (!channelName) throw new Error('missing VITE_TG_CHANNEL_NAME');
if (!channelTask) throw new Error('missing VITE_TG_CHANNEL_TASK');
if (!botUrl) throw new Error('missing VITE_TG_BOT_URL');
if (!sentryDsn) throw new Error('missing VITE_SENTRY_DSN');

export const env = { isProd, backUrl, tapUrl, channelName, channelTask, botUrl, sentryDsn };
