import React from 'react';



export default function Banner() {
  const handleButtonClick = () => {
    const url =
      "https://atp-data-services-f522238e01ad7f0190f8.o2.myshopify.dev/products/solid-state-drive-data-recovery-service-for-seagate-customers?Encryption+Type=Bitlocker+-+Windows+and+Linux+Compatible&Delivery=Standard";
  
    setBannerText("Enjoy special discounts!");
    window.open(url, "_blank");
  };

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
        <h2>Some memories just can't be <span className='blueWord text-[#5878ee]'>recreated</span></h2>
        <div>
          <button onClick={handleButtonClick} type="button">Recover Your Data</button>
        </div>
      </div>
    </div>
  );
}
