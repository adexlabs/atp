import React from 'react'
import SegateBanner from './SegateComponents/SegateBanner'

export default function SeagateCustomers  () {
  return (
    <>
   <SegateBanner
  title="Welcome to Our Store"
  caption="Limited Time Offer"
  imageSrc="https://example.com/icon.png" // Pass an image URL here
  buttonText="Shop Now"
  onButtonClick={() => alert("Button Clicked!")}
  backgroundImage="https://example.com/banner.jpg"
  highlightWordCount={2}
/>


    </>
  )
}

