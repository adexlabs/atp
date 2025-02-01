import React from 'react'
import SegateBanner from './SegateComponents/SegateBanner'
import logoImg from '~/assets/logo-seagate.png';
export default function SeagateCustomers  () {
  return (
    <>
   <SegateBanner
 title="Welcome to Our Service"
 buttonText="Get Started"
 onButtonClick={() => alert("Button clicked")}
 backgroundImage="https://example.com/your-background-image.jpg"
 image={logoImg}  // Image shown above the caption
 highlightWordCount={2}

/>



    </>
  )
}

