import {useLoaderData, Link} from '@remix-run/react';
import {defer} from '@shopify/remix-oxygen';

export async function loader({context}) {
  const {storefront} = context;

  const {collections} = await storefront.query(COLLECTIONS_QUERY);

  return defer({collections: collections.nodes});
}

export default function AllCollections() {
  const {collections} = useLoaderData();

  return (
    <div className="collections-list">
      <h2>Shop by Collection</h2>
      <div className="collections-grid">
        {collections.map((collection) => (
          <Link key={collection.id} to={`/collections/${collection.handle}`} className="collection-item">
            {collection.image && (
              <img src={collection.image.url} alt={collection.image.altText || collection.title} />
            )}
            <h3>{collection.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

const COLLECTIONS_QUERY = `#graphql
  query Collections {
    collections(first: 10) {
      nodes {
        id
        handle
        title
        image {
          url
          altText
        }
      }
    }
  }
`;
