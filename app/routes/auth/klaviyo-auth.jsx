import { json } from '@remix-run/node';
import shopify from '~/shopify.server';

/**
 * @param {import('@shopify/remix-oxygen').LoaderFunctionArgs} args
 */
export async function loader({ request }) {
  // Perform authentication for Shopify admin if needed
  await shopify.authenticate.admin(request);

  // Insert your Klaviyo-specific integration logic here.
  // For example, fetch your app installation details or perform additional checks.
  const data = await shopify.admin.graphql(`
    {
      currentAppInstallation {
        id
        installationId
        shop {
          id
          name
        }
      }
    }
  `);

  return json(data);
}

export default function KlaviyoAuthPage() {
  return <div>Klaviyo Auth Integration</div>;
}
