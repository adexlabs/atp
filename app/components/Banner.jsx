import { Link } from '@remix-run/react';
import React from 'react';



export default function Banner() {
 
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
      <div className="banner-text page-width">
        {/* <p>ATP DATA RECOVERY SERVICES</p> */}
        <h2 className='banner-heading'>Some memories just can't be <span className='blueWord text-[#5878ee]'>recreated</span></h2>
        <div>
        <Link
      to="/products/solid-state-drive-data-recovery-service-for-seagate-customers?Encryption+Type=Bitlocker+-+Windows+and+Linux+Compatible&Delivery=Standard">
      <button onClick={handleButtonClick} type="button">Recover Your Data</button></Link>
        </div>
      </div>
    </div>
  );
}
