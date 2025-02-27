export function trackViewedProduct(product) {
    let klaviyo = window.klaviyo || [];
    let item = {
        Name: product.title,
        ProductID: product.id.substring(product.id.lastIndexOf('/') + 1),
        ImageURL: product.selectedVariant.image.url,
        Handle: product.handle,
        Brand: product.vendor,
        Price: product.selectedVariant.price.amount,
        Metadata: {
          Brand: product.vendor,
          Price: product.selectedVariant.unitPrice,
          CompareAtPrice: product.selectedVariant.compareAtPrice,
        }
};
klaviyo.track('Hydrogen Viewed Product', item);
klaviyo.trackViewedItem(item);


}

export function trackAddedToCart(product) {
let klaviyo = window.klaviyo || []
let item = {
        Name: product.title,
        ProductID: product.id.substring(product.id.lastIndexOf('/') + 1),
        ImageURL: product.selectedVariant.image.url,
        Handle: product.handle,
        Brand: product.vendor,
        Price: product.selectedVariant.price.amount
      }
      klaviyo.track('Hydrogen Added To Cart', item)
}