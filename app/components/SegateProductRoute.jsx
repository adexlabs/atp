import React from 'react'
import NewBanner from './NewBanner'
import ImageTextSection from './ImageTextSection'
import bnnrImg from '~/assets/d-hero-seagate (1).jpg';
import ProductPageTrustBadges from './ProductPageTrustBadges';
import LogoSlider from './LogoSlider';
import recover from '~/assets/d-hero2-seagate.jpg';

export default function SegateProductRoute () {

const handleButtonClick = () => {
setBannerText("Enjoy special discounts!");
};

  return (
    <>
   <NewBanner
  title="We're Seagate's exclusive partner in data recovery."
  caption=""
  buttonText="Recover Your Data"
  onButtonClick={() => alert("Button clicked")}
  bannerStyle={{ height: "520px", backgroundColor: "#5bdc74" }} // adjustable banner style
  backgroundImage={bnnrImg} 
  highlightWordCount={0} 
  image="https://images.unsplash.com/photo-1735760672905-954da053c445?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
  extraText="Icon text"
/>
<ImageTextSection/>
<ProductPageTrustBadges/>
<LogoSlider/>


<div className="text-banner">
    <NewBanner
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
<NewBanner
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

