import React , { useState } from "react";
import bnnrImg from '~/assets/d-hero-seagate.jpg';
import bnnrImg2 from '~/assets/hero_desktop.png';
import Section_Banner from "./Section_Banner";
import NewBanner from "./NewBanner";
export default function About_Us(){
 
  const [bannerText, setBannerText] = useState("Welcome to our store!");

  const handleButtonClick = () => {
    setBannerText("Enjoy special discounts!");
  };
    return(
        <>
          <Section_Banner
                backgroundImage={bnnrImg} 
                height="400px"
                text="About Us"
                textColor="#fff"
                textAlign="center"
                opacity={0.1}
            />
            <div className="about-text-section">
            <h2 className="about-text-heading">There are 2 distinct categories of data loss</h2>
            <div className="two-text-section">
            <div className="text-block">
            <h4 className="text-heading">logical failure</h4>
            <p className="text-content">Logical failure happens when an application malfunction or virus infection results in data loss and corruption.</p>
            </div>
            <div className="text-block">
            <h4 className="text-heading">physical failure</h4>
            <p className="text-content">Physical failure occurs when your storage device experiences malfunction caused by damage to the hardware product. For example, it was dropped on the floor or its power supply endured a sudden electrical surge.</p>
            </div>
        </div>
        <ul className="about-text-list">
          <li>Sometimes, you may not even know what happened to your media.  All you know is that it stopped working while you are finding out you don't have a backed-up copy of the digital asset you need, for whatever reason.  </li>
          <li>Don't fret!  Life happens!  The important thing is, ATP Data Services is here to help you get your data back.  Our brilliant lab technicians have access to the best tools in the industry. That, combined with their tenured experience means that you are in good hands and are on your journey to get your data recovered.</li>
          <li>ATP Data Services has unrivaled expertise in hard disk drive data recovery because our team was part of the research and development organization at a major hard disk drive manufacturer.  That means we have access to state-of-the-art software and tools to maximize your chances of recovering your lost data.</li>
        </ul>
        </div>

        </>
    )
}