import { useShopQuery, gql } from "@shopify/hydrogen";
import { useParams } from "@remix-run/react";

const COLLECTION_QUERY = gql`
  query Collection($handle: String!) {
    collection(handle: $handle) {
      id
      title
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            images(first: 1) {
              nodes {
                url
                altText
              }
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`;

export default function HandlePage() {
  const { handle } = useParams();
  const { data } = useShopQuery({
    query: COLLECTION_QUERY,
    variables: { handle },
  });

  const collection = data?.collection;

  if (collection) {
    return (
      <div className="collection-page">
        <h1 className="collection-title">{collection.title}</h1>
        <div className="collection-grid">
          {collection.products.edges.map(({ node: product }) => (
            <div key={product.id} className="collection-item">
              <img
                src={product.images.nodes[0]?.url}
                alt={product.images.nodes[0]?.altText || product.title}
                className="collection-image"
              />
              <h4 className="collection-product-title">{product.title}</h4>
              <small className="collection-product-price">
                {product.priceRange.minVariantPrice.amount} {product.priceRange.minVariantPrice.currencyCode}
              </small>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <h2>Page Not Found</h2>;
}
