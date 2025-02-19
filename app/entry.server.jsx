// import {RemixServer} from '@remix-run/react';
// import isbot from 'isbot';
// import {renderToReadableStream} from 'react-dom/server';
// import {createContentSecurityPolicy} from '@shopify/hydrogen';

// /**
//  * @param {Request} request
//  * @param {number} responseStatusCode
//  * @param {Headers} responseHeaders
//  * @param {EntryContext} remixContext
//  * @param {AppLoadContext} context
//  */
// export default async function handleRequest(
//   request,
//   responseStatusCode,
//   responseHeaders,
//   remixContext,
//   context,
// ) {
//   const {nonce, header, NonceProvider} = createContentSecurityPolicy({
//     shop: {
//       checkoutDomain: context.env.PUBLIC_CHECKOUT_DOMAIN,
//       storeDomain: context.env.PUBLIC_STORE_DOMAIN,
//     },
//   });

//   const body = await renderToReadableStream(
//     <NonceProvider>
//       <RemixServer context={remixContext} url={request.url} />
//     </NonceProvider>,
//     {
//       nonce,
//       signal: request.signal,
//       onError(error) {
//         // eslint-disable-next-line no-console
//         console.error(error);
//         responseStatusCode = 500;
//       },
//     },
//   );

//   if (isbot(request.headers.get('user-agent'))) {
//     await body.allReady;
//   }

//   responseHeaders.set('Content-Type', 'text/html');
//   responseHeaders.set('Content-Security-Policy', header);

//   return new Response(body, {
//     headers: responseHeaders,
//     status: responseStatusCode,
//   });
// }

// /** @typedef {import('@shopify/remix-oxygen').EntryContext} EntryContext */
// /** @typedef {import('@shopify/remix-oxygen').AppLoadContext} AppLoadContext */

import { EntryContext } from '@shopify/remix-oxygen';
import {RemixServer} from '@remix-run/react';
import isbot from 'isbot';
import {renderToReadableStream} from 'react-dom/server';
import {createContentSecurityPolicy} from '@shopify/hydrogen';
import {createInstance} from 'i18next';
import {I18nextProvider, initReactI18next} from 'react-i18next';

import enCommon from '../public/locales/en/common.json';
import deCommon from '../public/locales/de/common.json';

import i18next from './i18next.server';
import i18n from './i18n'; // your i18n configuration file
export default async function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  const instance = createInstance();
  const url = new URL(request.url);
  const lng = url.pathname.startsWith('/de-de') ? 'de' : 'en';
  const ns = i18next.getRouteNamespaces(remixContext);

  await instance
    .use(initReactI18next)
    .init({
      ...i18n,
      lng,
      ns,
      resources: {
        en: { common: enCommon },
        de: { common: deCommon },
      },
    });

  const { nonce, header, NonceProvider } = createContentSecurityPolicy();
  const body = await renderToReadableStream(
    <I18nextProvider i18n={instance}>
      <NonceProvider>
        <RemixServer context={remixContext} url={request.url} />
      </NonceProvider>
    </I18nextProvider>,
    {
      nonce,
      signal: request.signal,
      onError(error) {
        console.error(error);
        responseStatusCode = 500;
      },
    }
  );

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  responseHeaders.set('Content-Security-Policy', header);
  
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
