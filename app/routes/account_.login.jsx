import {useTranslation} from 'react-i18next';
import i18next from '~/i18next.server';
/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({request, context}) {
  return context.customerAccount.login();
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
