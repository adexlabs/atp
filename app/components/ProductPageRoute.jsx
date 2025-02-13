import React from 'react'
import LogoSlider from './LogoSlider'
import ProductTrustBadges from './ProductTrustBadges'
import NewBanner from './NewBanner'
import VideoTextSection from './VideoTextSection'
import videocoverimg from '~/assets/coverimg1.jpeg';
export default function ProductPageRoute (){
  return (
    <>
     <VideoTextSection
        videoUrl="https://cdn.shopify.com/videos/c/o/v/ce8714bb41f042428c3dfa9e499eaaa2.mp4"
        coverImage={videocoverimg}
      />
    <ProductTrustBadges/>
    <LogoSlider/>
    </>
  )
}

