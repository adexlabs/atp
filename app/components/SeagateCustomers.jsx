import React from 'react'
import SegateBanner from './SegateComponents/SegateBanner'
import logoImg from '~/assets/logo-seagate.png';

import bnnrImg2 from '~/assets/d-hero-seagate.jpg';
import ImageTextSection from './ImageTextSection';
import ProductTrustBadges from './ProductTrustBadges';
import LogoSlider from './LogoSlider';
export default function SeagateCustomers  () {
  return (
    <>
    <div className='segate-banner'>
   <SegateBanner
 title="Welcome to Our Service"
 buttonText="Get Started"
 onButtonClick={() => alert("Button clicked")}
 bannerStyle={{ height: "520px", backgroundColor: "#5bdc74" }} // adjustable banner style
 backgroundImage={bnnrImg2}
 image={logoImg}  // Image shown above the caption
 highlightWordCount={2}
/></div>

<ImageTextSection/>

<ProductTrustBadges/>

<LogoSlider/>
    </>
  )
}

