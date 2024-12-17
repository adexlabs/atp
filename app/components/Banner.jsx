import React from 'react';



export default function Banner() {
  console.log('Banner component rendered');


  return (
    <div className="main-banner">
      {/* Banner Image */}
      <div className="banner-img">
        <picture>
          {/* Mobile image */}
          <source media="(max-width: 549px)" srcSet="https://cdn.shopify.com/s/files/1/0584/8688/2388/files/Hero_banner_mob.png?v=1734415284" />
          {/* Desktop image */}
          <img src="https://cdn.shopify.com/s/files/1/0584/8688/2388/files/Hero_banner_desktop.webp?v=1734415282" alt="Banner Image" />
        </picture>
      </div>


      {/* Banner Text */}
      <div className="banner-text">
        <p>ATP DATA RECOVERY SERVICES</p>
        <h2>Some memories just can't be <span className='blueWord text-[#5878ee]'>recreated</span></h2>
        <div>
          <button type="button">Recover Your Data</button>
        </div>
      </div>
    </div>
  );
}
