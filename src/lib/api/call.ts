import WebApp from '@twa-dev/sdk';
import { env } from '../env';

const { backUrl, tapUrl } = env;

export const getTapApi = async (endpoint: string) => callApi(tapUrl, endpoint);
export const getBackApi = async (endpoint: string) => callApi(backUrl, endpoint);
export const postTapApi = async (endpoint: string, body: any = undefined) =>
  callApi(tapUrl, endpoint, 'POST', JSON.stringify(body));
export const postBackApi = async (endpoint: string, body: any = undefined) =>
  callApi(backUrl, endpoint, 'POST', JSON.stringify(body));

const callApi = async (
  backUrl: string,
  endpoint: string,
  method: 'GET' | 'POST' = 'GET',
  body: string | undefined = undefined
) => {
  if (!WebApp.initData) throw new Error('Must run inside telegram app');
  const response = await fetch(`${backUrl}/${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${btoa(WebApp.initData)}`,
    },
    body,
  });
  if (response.status === 204) {
    console.debug({ endpoint, response });
    return null;
  }
  if (response.status !== 200) {
    console.debug({ endpoint, response });
    return false;
  }
  const responseJson = await response.json();
  console.debug({ endpoint, responseJson });
  return responseJson;
};
