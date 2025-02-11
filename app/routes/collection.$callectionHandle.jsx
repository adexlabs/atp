import { useShopQuery, gql } from "@shopify/hydrogen";
import { useParams } from "@remix-run/react";

export default function CollectionPage() {
  const { collectionHandle } = useParams(); // Get the collection handle from the URL

  // Extract index and name from the custom URL format (e.g., "1-summer-sale")
  const handleParts = collectionHandle.split("-");
  const collectionIndex = handleParts[0]; // This is the index (if needed)
  const handle = handleParts.slice(1).join("-"); // This is the actual collection handle

  const { data } = useShopQuery({
    query: COLLECTION_QUERY,
    variables: { handle },
  });

  if (!data?.collection) {
    return <p>Collection not found</p>;
  }

  return (
    <div>
      <h1>{data.collection.title}</h1>
      <ul>
        {data.collection.products.nodes.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

const COLLECTION_QUERY = gql`
  query CollectionByHandle($handle: String!) {
    collection(handle: $handle) {
      title
      products(first: 10) {
        nodes {
          id
          title
        }
      }
    }
  }
`;
