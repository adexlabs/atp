import React from 'react'
import SegateBanner from './SegateComponents/SegateBanner'
import logoImg from '~/assets/seagate-logo.png';
import recover from '~/assets/d-hero2-seagate.jpg';
import bnnrImg2 from '~/assets/d-hero-seagate.jpg';
import ImageTextSection from './ImageTextSection';
import ProductTrustBadges from './ProductTrustBadges';
import LogoSlider from './LogoSlider';
import TrustBadges from './TrustBadges';
import favicon1 from '~/assets/svg_money.svg';
import favicon2 from '~/assets/svg_award.svg';
import favicon3 from '~/assets/svg_lock.svg';
import favicon4 from '~/assets/svg_folder.svg';
import Collection from '~/routes/collections.$handle';
export default function SeagateCustomers  () {

  const customBadges = [
    {
      src: favicon3,
      alt: 'Custom SSL Secured',
      text: 'Includes password protected return media',
    },
    {
      src: favicon4,
      alt: 'Custom PayPal Accepted',
      text: 'Decades of data recovery experience',
    },
    {
      src: favicon1,
      alt: 'Custom Privacy Protection',
      text: 'Fixed, up front pricing',
    },
    {
      src: favicon2,
      alt: 'Custom Privacy Protection',
      text: '100% Money-back guarantee',
    },
  ];
  return (
    <div className='segate-routes'>
    <div className='segate-banner'>
   <SegateBanner
 title="We're Seagate's exclusive partner in data recovery"
 buttonText="Recover Your Data"
 onButtonClick={() => alert("Button clicked")}
 bannerStyle={{ height: "580px", backgroundColor: "" }} // adjustable banner style
 backgroundImage={bnnrImg2}
 image={logoImg}  // Image shown above the caption
 highlightWordCount={2}
 opacity="90%"
/></div>

<ImageTextSection/>

<ProductTrustBadges/>

<LogoSlider/>

<div className="text-banner">
    <SegateBanner
       title="Lost your data? Don't fret."
       caption=""
       buttonText="Have a Query?"
       onButtonClick={() => alert("Button clicked")}
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
  opacity="90%"
/>
  </div>

  <TrustBadges badges={customBadges} count={4} />
    </div>
  )
}

