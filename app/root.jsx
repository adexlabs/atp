import {useNonce, getShopAnalytics, Analytics} from '@shopify/hydrogen';
import {defer} from '@shopify/remix-oxygen';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  useRouteError,
  useRouteLoaderData,
  ScrollRestoration,
  isRouteErrorResponse,
  useLocation,
  Routes,
  Route,
  Link,
} from '@remix-run/react';
import favicon from '~/assets/Footer-logo.svg';
import LOGO from '~/assets/Footer-logo.svg';
import resetStyles from '~/styles/reset.css?url';
import appStyles from '~/styles/app.css?url';
import {PageLayout} from '~/components/PageLayout';
import {FOOTER_QUERY, HEADER_QUERY} from '~/lib/fragments';
import tailwindCss from './styles/tailwind.css?url';
import Banner from './components/Banner';
import ImageTextSection from './components/ImageTextSection';
import LogoSlider from './components/LogoSlider';
import HomePageRoute from './components/HomePageRoute';
import ProductPageRoute from './components/ProductPageRoute';
import FAQ from './components/FAQ';
import About_Us from './components/About_Us';
import SeagateCustomers from './components/SeagateCustomers';
import Collection from './routes/collections.$handle';


/**
 * This is important to avoid re-fetching root queries on sub-navigations
 * @type {ShouldRevalidateFunction}
 */
export const shouldRevalidate = ({
  formMethod,
  currentUrl,
  nextUrl,
  defaultShouldRevalidate,
}) => {
  // revalidate when a mutation is performed e.g add to cart, login...
  if (formMethod && formMethod !== 'GET') return true;

  // revalidate when manually revalidating via useRevalidator
  if (currentUrl.toString() === nextUrl.toString()) return true;

  return defaultShouldRevalidate;
};

export function links() {
  return [
    {rel: 'stylesheet', href: tailwindCss},
    {rel: 'stylesheet', href: resetStyles},
    {rel: 'stylesheet', href: appStyles},
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {rel: 'icon', type: 'image/svg+xml', href: LOGO},
  ];
}

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader(args) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);
  

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);
// 
  const {storefront, env} = args.context;
  return defer({
    ...deferredData,
    ...criticalData,
  });
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 * @param {LoaderFunctionArgs}
 */
async function loadCriticalData({context}) {
  const {storefront} = context;

  const [header] = await Promise.all([
    storefront.query(HEADER_QUERY, {
      cache: storefront.CacheLong(),
      variables: {
        headerMenuHandle: 'main-menu', // Adjust to your header menu handle
      },
    }),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {header};
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 * @param {LoaderFunctionArgs}
 */
function loadDeferredData({context}) {
  const {storefront, customerAccount, cart} = context;

  // defer the footer query (below the fold)
  const footer = storefront
    .query(FOOTER_QUERY, {
      cache: storefront.CacheLong(),
      variables: {
        footerMenuHandle: 'footer', // Adjust to your footer menu handle
      },
    })
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });
  return {
    cart: cart.get(),
    isLoggedIn: customerAccount.isLoggedIn(),
    footer,
  };
}

/**
 * @param {{children?: React.ReactNode}}
 */
export function Layout({children}) {
  const nonce = useNonce();
  const location = useLocation();
  // const isCollectionPage = location.pathname.startsWith('/collection');
  // const isProductPage = location.pathname.startsWith('/products');
  // const isCollectionPage = location.pathname.startsWith('/collections');
  /** @type {RootLoader} */
  const data = useRouteLoaderData('root');
  // const hideOnPages = ["/faq", "/aboutus", "/segatecustomers", "/policies/privacy-policy", "/policies/terms-of-service", "/collections/{handle}"];
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {data ? (
          <Analytics.Provider
            cart={data.cart}
            shop={data.shop}
            consent={data.consent}
          >
            <PageLayout {...data}>
          

            {/* {!isProductPage && !isCollectionPage && ( <Banner />)} */}
            {/* {!isProductPage && !isCollectionPage && !hideOnPages.includes(location.pathname) && (
              <Banner />
            )} */}
         
            {children}
            {/* {!isCollectionPage && (isProductPage ? ( <ProductPageRoute />) : ( <HomePageRoute />))} */}
{/* 
            { !isCollectionPage && !hideOnPages.includes(location.pathname) && (
              isProductPage ? <ProductPageRoute /> : <HomePageRoute />
            )} */}
        {/* { !isCollectionPage && !hideOnPages.includes(location.pathname) && isProductPage && <ProductPageRoute /> } */}
      
            {/* <Routes>
            <Route path="/faq" element={<FAQ />} />
            <Route path="/aboutus" element={<About_Us />} />      
           <Route path="/segate-customers" element={ <SeagateCustomers/>} />
           </Routes> */}
       
             </PageLayout>
          </Analytics.Provider>
        ) : (
          children
        )}
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
}

export default function App() {

  return <Outlet />;
  
}

export function ErrorBoundary() {
  const error = useRouteError();
  let errorMessage = 'Unknown error';
  let errorStatus = 500;

  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message ?? error.data;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <Layout {...root.data}>
   
    <div className="route-error">
      <h1>Oops</h1>
      <h2>{errorStatus}</h2>
      {errorMessage && (
        <fieldset>
          <pre>{errorMessage}</pre>
        </fieldset>
      )}

     <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
        <LiveReload nonce={nonce} />
    </div>
    </Layout>
  );
}




/** @typedef {LoaderReturnData} RootLoader */

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@remix-run/react').ShouldRevalidateFunction} ShouldRevalidateFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */

