import { useLoaderData, Link } from "@remix-run/react";
import { defer } from "@shopify/remix-oxygen";
import { getPaginationVariables, Image } from "@shopify/hydrogen";
import { PaginatedResourceSection } from "~/components/PaginatedResourceSection";
import VideoTextSection from "~/components/VideoTextSection";
import LogoSlider from "~/components/LogoSlider";
import ProductTrustBadges from "~/components/ProductTrustBadges";
import SegateBanner from "~/components/SegateComponents/SegateBanner";
import bnnrImg2 from '~/assets/SEAGATE_Back-up_screen-MAC_Lo-Res.jpg';
import logoImg from '~/assets/seagate-logo.png';

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader(args) {
  // Load collection data
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);

  return defer({ ...deferredData, ...criticalData });
}

/**
 * Fetch the main collection details and its products
 */
async function loadCriticalData({ context, params, request }) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8, // Number of products per page
  });

  const { collection } = await context.storefront.query(PRODUCTS_QUERY, {
    variables: { handle: params.collectionHandle, ...paginationVariables },
  });

  if (!collection) {
    throw new Response("Collection Not Found", { status: 404 });
  }

  return { collection };
}

/**
 * Load deferred data if needed (e.g., reviews, additional content)
 */
function loadDeferredData({ context }) {
  return {};
}

export default function CollectionPage() {
  /** @type {LoaderReturnData} */
  const { collection } = useLoaderData();

  return (
    <div className="collection-page">
      <div className='segate-banner'>
      <SegateBanner
        title="Data Recovery Services for Seagate Customers"
        bannerStyle={{ height: "450px", backgroundColor: "" }} // adjustable banner style
        backgroundImage={bnnrImg2}
        image={logoImg}  // Image shown above the caption
        highlightWordCount={2}
        opacity=""
      />
    </div>
      <h1 className="collection-page-title">{collection.title}</h1>
      <PaginatedResourceSection
        connection={collection.products}
        resourcesClassName="products-grid"
      >
        {({ node: product, index }) => (
          <ProductItem key={product.id} product={product} index={index} />
        )}
      </PaginatedResourceSection>

      <VideoTextSection/>
      <ProductTrustBadges/>
      <LogoSlider/>
    </div>
  );
}

/**
 * Product Grid Item Component
 */
function ProductItem({ product, index }) {
  return (
    <>
    <Link className="product-item" to={`/products/${product.handle}`} prefetch="intent">
      {product?.featuredImage && (
        <Image
          alt={product.featuredImage.altText || product.title}
          aspectRatio="1/1"
          data={product.featuredImage}
          loading={index < 3 ? "eager" : undefined}
        />
      )}
      <h5>{product.title}</h5>
      <p>${product.priceRange.minVariantPrice.amount}</p>
    </Link>
    </>
  );
}

/**
 * GraphQL Query to Fetch Collection Details & Products
 */
const PRODUCTS_QUERY = `#graphql
  query CollectionWithProducts(
    $handle: String!
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) {
    collection(handle: $handle) {
      id
      title
      products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
        nodes {
          id
          title
          handle
          featuredImage {
            url
            altText
            width
            height
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
