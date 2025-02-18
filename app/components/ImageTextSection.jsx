import React from 'react'
import bnnrImg1 from '~/assets/money_guarantee-new.jpg';
import bnnrImg2 from '~/assets/price_transparency_new.jpg';
export default function ImageTextSection  () {
    const handleClick = () => {
        alert('Button clicked!');
      };
  return (
    <>
<div className='image-text-wrapper'>
<div className='imageText'>
<div className='image-wrap'>
<img src={bnnrImg2} alt='price transparency'/>
</div>
  <div className='image-content'>
    <p className='caption'>price transparency</p >
    <h2 className='image-heading'>Our fixed-price recovery model means no hidden fees or price increases.</h2>
   {/* <button className='img-text-btn'>Read More</button> */}
    </div> 
</div>

<div className='imageText'>
<div className='image-wrap'>
<img src={bnnrImg1} alt='risk guarantee'/>
</div>
  <div className='image-content'>
    <p className='caption'>zero-risk guarantee</p>
    <h2 className='image-heading'>Our <span className='color-text'>zero-risk guarantee </span> means you’ll only pay for successful recovery.</h2>
     {/* <button className='img-text-btn'>Read More</button> */}
    </div>
    </div> 
</div>
    </>
  )
}
