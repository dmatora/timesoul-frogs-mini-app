const { VITE_API_BACK_URL: backUrl, VITE_API_TAP_URL: tapUrl } = import.meta.env;

if (!backUrl) throw new Error('missing VITE_API_BACK_URL');
if (!tapUrl) throw new Error('missing VITE_API_TAP_URL');

export const env = { backUrl, tapUrl };
