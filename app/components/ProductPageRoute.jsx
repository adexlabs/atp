import React from 'react'
import LogoSlider from './LogoSlider'
import ProductTrustBadges from './ProductTrustBadges'
import NewBanner from './NewBanner'
import VideoTextSection from './VideoTextSection'
export default function ProductPageRoute (){
  return (
    <>
    <ProductTrustBadges/>
    <VideoTextSection/>
    <LogoSlider/>
    </>
  )
}

