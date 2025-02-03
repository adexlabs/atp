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

<div className="text-banner">
    <SegateBanner
       title="Lost your data? Don't fret."
       caption=""
       buttonText="Have a Query?"
       onButtonClick={handleButtonClick}
       bannerStyle={{ height: "390px", backgroundColor: "" }} // adjustable banner style
       backgroundImage="" // Background image URL
       highlightWordCount={2} 
       paragraph="ATP Data Services to the rescue to get your indispensable data back! Our team of data recovery experts has many years of experience working in the storage and recovery industry.  We are dedicated to providing the best possible service to our clients. We pride ourselves on our professionalism, confidentiality, and commitment to excellence.  You can count on us!"
      />
    </div>

    <div className="digital-assets">
<SegateBanner
  title="Recover your most important digital assets today."
  caption=""
  buttonText="Get Started"
  onButtonClick={() => alert("Button clicked")}
  bannerStyle={{ height: "520px", backgroundColor: "#f6f6f8" }} // adjustable banner style
  backgroundImage={recover} 
  highlightWordCount={0} 
/>
  </div>
    </>
  )
}

