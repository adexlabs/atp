// Import React and CSS
import React, { useState } from "react";
import Section_Banner from "./Section_Banner";
import bnnrImg from '~/assets/faq.jpg';
import { Link } from "@remix-run/react";
export default function FAQ () {
  const [activeIndex, setActiveIndex] = useState(null);
 
  const faqData = [
    {
      question: "What is the end-to-end data recovery services process?",
      answer: (
        <>
     <ul className="custom-list">
                <li>You submit a case and pay for the services upfront.</li>
                <li>You package your media and incur the cost of shipping it to our lab, information you will receive via email.</li>
                <li>We keep you updated on the status of your recovery via email.</li>
           
            <li>When we receive your media at our lab, our technicians work on recovering your data.</li>
            <li>There are 2 possible outcomes from your data recovery services:</li> 
            <ul className="custom-list">
                <li>recovery successful: We ship your data back to you on a USB.</li>
                <li>Recovery unsuccessful: We return your original media back to you and you receive a refund.</li>
            </ul>
            <li>We close your case and send you a feedback survey.</li></ul>
        </>
    )
    },
    {
      question: "Where do I send my device for recovery?",
      answer: <>
      <p>Before you send it to us for recovery, please submit a prepaid case at Services & Pricing | Atpdataservices.</p>
      <p> Please print a copy of your invoice and include it with your shipment and send it to the following address:</p>
<ul className="atp-address">
<li>ATP DATA SERVICES</li>

<li>6525 N Meridian Avenue</li>

<li>Ste 150</li>

<li>Oklahoma City, OK 73116.</li>
</ul>
</>
    },
    {
      question: "How should I package my media to ship it to you?",
      answer: <>
      <p>To maximize your chances of a successful data recovery, it is important to protect your media during 
        shipment because device components are very delicate.  Any potential mishandling of the hardware could
         cause further damage to the media.  If you have access to non-static wrapping material, it would be best.
        However, all media should be wrapped in bubble wrap or foam and placed in a box that is twice the size of 
        your media.  The shipping box should have enough room for both the media and the packing material that 
        allows for NO movement while in transit.</p>
      <ul className="second-list">
        <li>Please note that if you are sending us an internal hard disk drive, be sure to remove it from the laptop or desktop computer case before shipping it to us.</li>
        <li>For smaller items such as flash media cards, USB drives and smartphones, please place it in an envelope before wrapping it and placing it in the shipping box.</li>
        <li>When shipping multiple drives to us, we recommend packaging each drive in its own box or to make sure each drive is separated with packing material so that there
           is no contact between each drive when they are packed in the same large box.</li>
      </ul>
      </>
    },
    {
      question: "Should I get insurance to cover the device I am sending you for data recovery?",
      answer: "You may consider getting insurance from a provider to cover any hardware that has significant value.  However, it is important to note that you cannot insure the value of the data so while you cover for the value of the hardware, this does not insure your data."
    },
    {
      question: "What is the cost of data recovery services?",
      answer: "By selecting the media type and quantity in the e-commerce section of the of our website, you will be able to see the all-in price for the relevant services.  You will be charged upfront for the data recovery services."
    },
    {
      question: "What is included in my data recovery services cost?",
      answer: "Your data recovery services pricing includes any spare parts that may be needed, labor, a new device or service to provide you with your data, return shipping, and any other cost incurred in recovering your data and providing you with access.   However, this does not include the outbound shipping cost of shipping your media to our facility."
    },
    {
      question: "Is ATP Data Services able to recover data from encrypted drives?",
      answer: "As long as you have the password for the encrypted drive, we will be able to access the drive to recover the data.  Unfortunately, without the password, we are not able to access the data. Please do not include the password of the encrypted drive in the package you are sending to us.  You can communicate that password to us either on the submission form or email us the information separately at info@atpdataservices with your case information."
    },
    {
      question: "How long will it take to recover my data and ship it back to me?",
      answer: "It takes an estimated 25 business days from the time we receive your device at our facility till the time we complete your data recovery service."
    },
    {
      question: "Why does it take time to recover my data?",
      answer: "To learn more about the reason why it may take time to recover your data, please read our blog about what data recovery entails at So what does data recovery really entail? (atpdataservices.com)"
    },
    {
      question: "What should I expect once my data is recovered?",
      answer: "Once we recover your data, we will ship it back to you on an encrypted USB drive.  We will communicate the password of the drive to you via email.  You will be able to reset the password of the drive once you receive it."
    },
    {
      question: "What should I expect if my data is not recovered?",
      answer: "In the event your data is not recoverable, we will return the original device back to you.  In this scenario, please note that your device will not include its original enclosure and accessories.  In addition, we will refund you the entire data recovery services fee."
    },
    {
      question: "Why was my data recovery unsuccessful?",
      answer: <>
      <p>Hard disk drives (HDDs) store data on spinning platters. Mechanical failures such as scratches, corrosion, or physical damage to these platters can render the data unrecoverable. If the damage is severe enough, it may not be possible to read the data from anywhere on the platter.  In addition, a head crash occurs when the read/write heads of an HDD make physical contact with the platters. This can lead to damage to both the heads and the platters, making data recovery impossible. The severity of the head crash influences the chances of successful recovery.  While mechanical failures in storage devices are common reasons for data loss, non-mechanical issues can also pose challenges to successful data recovery. There are numerous non-mechanical reasons why data recovery might not be successful:</p>
      <ul className="third-list">
        <li>If new data has been written to a storage device after it has been deleted or made inaccessible, it can overwrite the sectors containing the lost data.</li>
        <li>If data loss resulted from file corruption rather than deletion, this also means certain sections of the data were overwritten by incorrect data.  Data corruption can occur due to software issues, power outages, unstable write heads, or other non-mechanical factor</li>
        <li>Encrypted data adds an extra layer of complexity to the recovery process. If the data is encrypted, the recovery service needs access to the correct encryption keys to decrypt and recover the files. Here too, corruption might damage certain areas on the device needed to correctly decrypt data.</li>
        <li>Damage to the file system structure, for example the master file table (MFT) on NTFS file systems, can make it difficult or impossible to locate and recover files.  This is especially true for heavily fragmented files.</li>
        <li>Problems with the firmware of a storage device can impede the data recovery process. Firmware issues may prevent the drive from functioning correctly or cause it to misinterpret the data, leading to difficulties in accessing and recovering the lost files</li>
      </ul>
      <p>For flash based storage devices such as solid state drives (SSDs), SD cards, or portable USB drives, physical damage to the storage chips such as cracked or severely overheated chips will sever its extremely small, internal connections. After the manufacturing process, it is no longer possible to access these electrical connections, making the data unrecoverable.</p>
      
      </>
    },
    {
      question: "Why was my recovered data not structured in the same folders and with the same file names as my original files?",
      answer: "Our preferred shipping partners are either USPS or UPS.  Please make sure you request the service level that provides you with tracking information."
    },
    {
      question: "Who can I contact if I have questions about my data recovery case?",
      answer: "Please email us at info@atpdataservices.com.  You can expect a reply from us within 72 hours."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 
  return (
    <>
          {/* <Link
      className="faq-section"
       to={`/faq`}> */}
          
     <Section_Banner
  backgroundImage={bnnrImg} 
  height="400px"
  text=""
  textColor="#fff"
  textAlign="center"
  opacity={0.1}
/>

    <div className="faq-container">
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13A.5.5 0 0 1 8 1z" />
                    <path d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8z" />
                  </svg>
                )}
              </span>
              {/* {item.question} */}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    {/* </Link> */}
    </>
  );
};




