import React from 'react'
import Banner from './Banner'
import ImageTextSection from './ImageTextSection'
import LogoSlider from './LogoSlider'
import NewBanner from "./NewBanner";
import recover from '~/assets/d-hero2-atp.jpg';
import TrustBadges from './TrustBadges';
import favicon1 from '~/assets/svg_money.svg';
import favicon2 from '~/assets/svg_award.svg';
import favicon3 from '~/assets/svg_lock.svg';
import favicon4 from '~/assets/svg_folder.svg';
import { Route, Routes } from '@remix-run/react';
import FAQ from './FAQ';
import FormBuilder from './FormBuilder';
import VideoTextSection from './VideoTextSection';
import Video from './Video';
import videocoverimg2 from '~/assets/coverimg2.jpeg';
import ContactPage from './ContactPage';
export default function HomePageRoute() {
  
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
    <>
<ImageTextSection/>
<LogoSlider/>
<div className="text-banner">
    <NewBanner
       title="Lost your data? Don't fret."
       caption=""
       buttonText="Get Help Now?"
       bannerStyle={{ height: "405px", backgroundColor: "#f6f6f8" }} // adjustable banner style
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
  bannerStyle={{ height: "520px", backgroundColor: "#f6f6f8" }} // adjustable banner style
  backgroundImage={recover} 
  highlightWordCount={0} 
/>
  </div>
  <div className='contact-form'>
    
<FormBuilder/>

      </div>


{/* <Video
      videoUrl="https://cdn.shopify.com/videos/c/o/v/bfe170899e5a45cf93d65c0610d03eda.mp4"
      coverImage={videocoverimg2}/> */}
  <TrustBadges badges={customBadges} count={4} />
 
    </>
  )
}

