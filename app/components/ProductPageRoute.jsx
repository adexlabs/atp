import React from 'react'
import LogoSlider from './LogoSlider'
import ProductTrustBadges from './ProductTrustBadges'
import NewBanner from './NewBanner'

export default function ProductPageRoute (){
  return (
    <>
    <ProductTrustBadges/>
    <div className="text-banner">
    <NewBanner
       title="Lost your data? Don't fret."
       caption=""
       buttonText="Get Help Now?"
       onButtonClick=""
       bannerStyle={{ height: "395px", backgroundColor: "#f6f6f8" }} // adjustable banner style
       backgroundImage="" // Background image URL
       highlightWordCount={2} 
       paragraph="ATP Data Services to the rescue to get your indispensable data back! Our team of data recovery experts has many years of experience working in the storage and recovery industry.  We are dedicated to providing the best possible service to our clients. We pride ourselves on our professionalism, confidentiality, and commitment to excellence.  You can count on us!"
      />
    </div>
    {/* <LogoSlider/> */}
    </>
  )
}

