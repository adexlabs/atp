import React from 'react'
import SegateBanner from './SegateComponents/SegateBanner'
import logoImg from '~/assets/logo-seagate.png';
export default function SeagateCustomers  () {
  return (
    <>
   <SegateBanner
 title="Welcome to Our Service"
 caption="Providing the best services to you!"
 buttonText="Get Started"
 onButtonClick={() => alert("Button clicked")}
 backgroundImage="https://example.com/your-background-image.jpg"
 image={logoImg}  // Image shown above the caption
 extraText="Learn more"
 highlightWordCount={2}
 paragraph="Here we offer excellent services to meet your needs."
/>



    </>
  )
}

