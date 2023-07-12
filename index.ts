import { BatchInterceptor } from '@mswjs/interceptors';
// eslint-disable-next-line node/file-extension-in-import
import { ClientRequestInterceptor } from '@mswjs/interceptors/ClientRequest';
// eslint-disable-next-line node/file-extension-in-import
import { XMLHttpRequestInterceptor } from '@mswjs/interceptors/XMLHttpRequest';
import * as https from 'https';
import { HttpsProxyAgent } from 'https-proxy-agent';

const interceptor = new BatchInterceptor({
  name: 'my-interceptor',
  interceptors: [
    new ClientRequestInterceptor(),
    new XMLHttpRequestInterceptor(),
  ],
});

interceptor.apply();

interceptor.on('request', (req) => {
  console.log(req);
});

const resultUrlProxy = 'http://name:password@ip:port';
const httpAgent = new HttpsProxyAgent(resultUrlProxy);

https.get('https://api.myip.com', { agent: httpAgent }, (res) => {
  res.pipe(process.stdout);
});
