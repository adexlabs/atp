import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link, data} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import left from '~/assets/left.png';
import right from '~/assets/right.png';
import HomePageRoute from '~/components/HomePageRoute';
import Banner from '~/components/Banner';
import ImageSlider from '~/components/ImageSlider';
/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader(args) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return defer({...deferredData, ...criticalData});

}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 * @param {LoaderFunctionArgs}
 */
async function loadCriticalData({context}) {
 
  let allProducts = [];
  let cursor = null;
  let hasNextPage = true;

  while (hasNextPage) {
    const {products} = await context.storefront.query(FEATURED_PRODUCTS_QUERY, {
      variables: {cursor},
    });

    allProducts = [...allProducts, ...products.nodes];
    hasNextPage = products.pageInfo.hasNextPage;
    cursor = products.pageInfo.endCursor;
  }
  const [{collections},  {products}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
    context.storefront.query(FEATURED_PRODUCTS_QUERY),
  ]);

  return {
    featuredCollection: collections.nodes[0],
    featuredProducts: products.nodes, // Products ko return karna

  };
}


/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 * @param {LoaderFunctionArgs}
 */
function loadDeferredData({context}) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Homepage() {

 
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  const images = [
    { src: {left}, alt: "Image 1" },
    { src: {right}, alt: "Image 1" },
    { src: {left}, alt: "Image 1" },
    { src: {right}, alt: "Image 1" },
    { src: {left}, alt: "Image 1" },
    { src: {right}, alt: "Image 1" },
  ];
  return (
    // <div className="home page-width">
    <div className="home">
         <Banner/>
         <ImageSlider images={images} />
      {/* <FeaturedProducts products={data.featuredProducts} /> */}
      {/* <FeaturedCollection collection={data.featuredCollection} /> */}
      {/* <RecommendedProducts products={data.recommendedProducts} /> */}
         <HomePageRoute/>
    </div>
  );
}

/**
 * @param {{
 *   collection: FeaturedCollectionFragment;
 * }}
 */
function FeaturedCollection({collection}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className="featured-collection"
       to={`/collections/${collection.handle}`}
     
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h1>{collection.title}</h1>
    </Link>
  );
}


/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery | null>;
 * }}
 */
function RecommendedProducts({products}) {
  return (
    <div className="recommended-products">
      <h2 className='recommended-products-heading'>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div className="recommended-products-grid">
              {response
                ? response.products.nodes.map((product) => (
                    <Link
                      key={product.id}
                      className="recommended-product"
                      to={`/products/${product.handle}`}
                    >
                      <Image
                        data={product.images.nodes[0]}
                        aspectRatio="1/1"
                        sizes="(min-width: 45em) 20vw, 50vw"
                      />
                      <h4>{product.title}</h4>
                      <small>
                        <Money data={product.priceRange.minVariantPrice} />
                      </small>
                    </Link>
                  ))
                : null}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}



function FeaturedProducts({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <div className="featured-products">
      <h2 className='featured-products-title'>Devices We Recover</h2>
      <Swiper
      className='custom-swiper'
        spaceBetween={20}
        slidesPerView={2} // Mobile ke liye
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation={true} // Left/Right Arrows enable 
        pagination={{ clickable: true }} // Dots enable 
        modules={[Navigation, Pagination]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link className="featured-product" to={`/products/${product.handle}`}>
              <Image
                data={product.images.nodes[0]}
                aspectRatio="1/1"
                sizes="(min-width: 45em) 20vw, 50vw"
              />
              <h4 className='product-title'>{product.title}</h4>
              <small className='product-price'>
                <Money data={product.priceRange.minVariantPrice} />
              </small>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

);
}
 
const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;


const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;


// CUSTOM PRODUCTS ADDED

const FEATURED_PRODUCTS_QUERY = `#graphql
  fragment FeaturedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query FeaturedProducts($country: CountryCode, $language: LanguageCode, $cursor: String) 
    @inContext(country: $country, language: $language) {
    products(first: 20, after: $cursor, sortKey: UPDATED_AT, reverse: true) { 
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ...FeaturedProduct
      }
    }
  }
`;




/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
