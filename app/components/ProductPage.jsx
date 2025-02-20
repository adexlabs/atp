import React from 'react';
import { OkendoProvider, OkendoStarRating, OkendoReviews, getOkendoProviderData } from '@okendo/shopify-hydrogen';

export default function ProductPage({ product }) {
  // Dummy Product Data
  const dummyProduct = {
    id: "gid://shopify/Product/123456789",
    title: "Awesome T-Shirt",
    price: "$25.00"
  };

  // Okendo Provider Data
  const okendoProviderData = getOkendoProviderData({
    context: {},
    subscriberId: 'your-okendo-subscriber-id' // Replace with your Okendo Subscriber ID
  });

  return (
    <OkendoProvider okendoProviderData={okendoProviderData}>
      <div className="product-page">
        <h1>{dummyProduct.title}</h1>
        <p>Price: {dummyProduct.price}</p>

        {/* Okendo Star Rating */}
        <OkendoStarRating productId={dummyProduct.id} />

        {/* Okendo Reviews Section */}
        <OkendoReviews productId={dummyProduct.id} />
      </div>
    </OkendoProvider>
  );
}
