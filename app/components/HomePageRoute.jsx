import React from 'react'
import Banner from './Banner'
import ImageTextSection from './ImageTextSection'
import LogoSlider from './LogoSlider'
import NewBanner from "./NewBanner";
import recover from '~/assets/d-hero2-atp.jpg';
export default function HomePageRoute() {
  return (
    <>
<ImageTextSection/>
<LogoSlider/>
<div className="text-banner">
    <NewBanner
       title="Lost your data? Don't fret."
       caption=""
       buttonText="Have a Query?"
       onButtonClick={handleButtonClick}
       bannerStyle={{ height: "390px", backgroundColor: "#f6f6f8" }} // adjustable banner style
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

