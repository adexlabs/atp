import {RemixServer} from '@remix-run/react';
import isbot from 'isbot';
import {renderToReadableStream} from 'react-dom/server';
import {createContentSecurityPolicy} from '@shopify/hydrogen';

/**
 * @param {Request} request
 * @param {number} responseStatusCode
 * @param {Headers} responseHeaders
 * @param {EntryContext} remixContext
 * @param {AppLoadContext} context
 */
export default async function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
  context,
) {
  let {nonce, header, NonceProvider} = createContentSecurityPolicy({

    scriptSrc: [
      "'self'",
      'https://cdn.shopify.com',
      'https://shopify.com',
      'https://www.google.com',
      'https://maps.googleapis.com',
      'https://maps.gstatic.com',
      'https://goo.gle/js-api-loading',
    ],
    connectSrc: [
      "'self'",
      'https://cdn.shopify.com',
      'https://shopify.com',
      'https://maps.googleapis.com',
      'https://maps.gstatic.com',
      'https://*.googleapis.com',
      'https://www.google.com',
      'https://monorail-edge.shopifysvc.com', 
      'https://atp-data-services.myshopify.com',
    ],
    styleSrc: [
      "'self'",
      'https://cdn.shopify.com',
      'http://localhost:*',
    ],
    
  shop: {
    checkoutDomain: context.env.PUBLIC_CHECKOUT_DOMAIN,
    storeDomain: context.env.PUBLIC_STORE_DOMAIN,
  },

});

  
  const body = await renderToReadableStream(
    <NonceProvider>
      <RemixServer context={remixContext} url={request.url} />
    </NonceProvider>,
    {
      nonce,
      signal: request.signal,
      onError(error) {
        // eslint-disable-next-line no-console
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  header = header.replace('https://cdn.shopify.com', 'https://maps.googleapis.com https://fonts.gstatic.com' );
  responseHeaders.set('Content-Type', 'text/html');
  
responseHeaders.set('Content-Security-Policy', header);

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
    
  });
}

/** @typedef {import('@shopify/remix-oxygen').EntryContext} EntryContext */
/** @typedef {import('@shopify/remix-oxygen').AppLoadContext} AppLoadContext */



// Add Custom Code
