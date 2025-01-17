import React from 'react';
import favicon1 from '~/assets/svg_money.svg';
import favicon2 from '~/assets/svg_handshake.svg';
import favicon3 from '~/assets/svg_folder.svg';
import favicon4 from '~/assets/svg_award.svg';
import favicon5 from '~/assets/svg_smile (1).svg';
import favicon6 from '~/assets/svg_lock.svg';
export default function ProductTrustBadges (){
const badges = [
  {
    src: favicon1,
    alt: 'SSL Secured',
    text: 'Non-Seagate callout placeholder',
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  },
  {
    src: favicon2,
    alt: 'PayPal Accepted',
    text: 'Expertise you can trust',
    para: "As a former in-house data recovery service provider for Seagate, we have years of close relationships working alongside Seagate's hard disk drive's design, research and development organizations so we understand every aspect of a Seagate hard disk drive." },
  {
    src: favicon3,
    alt: 'Privacy Protection',
    text: 'Best recover success rate',
    para: "Thanks to our long-standing relationship with Seagate, we have access to the latest and greatest firmware and tools to repair your Seagate hard disk drive so that we can successfully recover the data that is stored on it.  No one else in the industry has this access."
 
  },
  {
    src: favicon4,
    alt: 'Visa & Mastercard Accepted',
    text: 'Money Back Guaranteed',
    para: "Besides providing you with upfront, flat-rate pricing, no matter how many terabytes you need recovered, we will give you a full refund should your data recovery service be unsuccessful.  That's extra peace of mind that we will do our best to recover your data."
  },
  {
    src: favicon5,
    alt: 'Privacy Protection',
    text: 'We make it easy',
    para: "We understand that losing your data is stressful enough so we make it easy for you to go through the process of recovering your data.  Take a vacation, we'll keep you posted via email throughout the whole process so you won't miss a beat no matter where you are in the world."
 
  },
  {
    src: favicon6,
    alt: 'Visa & Mastercard Accepted',
    text: 'We keep it secure',
    para: "Your data privacy is most important to us. We take every measure to keep your data safe from the time it enters our data recovery lab to the time we ship the recovered data back to you, safely encrypted."}
];


  return (
    <>
      
      <div className="badges">
        {/* <h3>Trusted by Thousands of Customers</h3> */}
        <div className="badges-wrapper">
          {/* Map through the badges array and render each image */}
          {badges.map((badge, index) => (
            <div key={index} className="product-badge-wrapper">
              <img
                src={badge.src}
                alt={badge.alt}
                className="badge-img"
              />
              <span className="product-badge-text">{badge.text}</span>
              <p className='badge-para'>{badge.para}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


