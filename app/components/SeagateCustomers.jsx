import React from 'react'
import SegateBanner from './SegateComponents/SegateBanner'
import logoImg from '~/assets/logo-seagate.png';
export default function SeagateCustomers  () {
  return (
    <>
   <SegateBanner
  title="Welcome to ATP Data Services"
  caption="We provide top-notch data solutions."
  buttonText="Get Started"
  onButtonClick={handleButtonClick}
  backgroundImage="https://example.com/your-background-image.jpg"
  image={logoImg}  // Image displayed above the caption
  extraText="Explore our services."
  highlightWordCount={2}  // This will highlight the last 2 words of the title
  paragraph="Here at ATP Data Services, we are committed to providing exceptional data solutions for your business."
/>

    </>
  )
}

