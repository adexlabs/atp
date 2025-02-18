import React from 'react'
import videocoverimg1 from '~/assets/coverimg1.jpeg';
import videocoverimg2 from '~/assets/coverimg2.jpeg';
import VideoGallery from './VideoGallery';
export default function VideoTextSection () {
  return (
    <>
    <div className='video-text'>
        <div className='video-content'>
        <h2 className='v-content-title1'>What Customers are Saying</h2>
        <h2 className='v-content-title2'>Watch Customer Videos</h2>
        </div>
        <div className='video-wrapper'>
            <div className='video-text-wrap'>
        <VideoGallery
        videoUrl="https://cdn.shopify.com/videos/c/o/v/dd1de37d3a9e45c095ab5d4ad37d7e34.mp4"
        coverImage={videocoverimg1}
      />
   <div className='content'> <p className='v-content'>They really understood my work was super, duper important. 
            That makes you feel like someone is really taking care of you, that someone has your back.</p>
        <h4 className='v-address'>- Theresa Debono, Photographer, Malta</h4></div>
      </div>
      <div className='video-text-wrap'>
        <VideoGallery
        videoUrl="https://cdn.shopify.com/videos/c/o/v/da21d90dfe014d4cb7db92ea09cd15d4.mp4"
        coverImage={videocoverimg2}
      />
      <div className='content'>
        <p className='v-content'>Consumers and even professionals who buy something like a hard drive 
            probably expect it will work forever. There are occasions when things fail.  
            I was happy to call the client and say it's handled, we have your files and are ready to go.</p>
        <h4 className='v-address'>- Dave Prunty, Videographer, Montana, United States</h4></div>
      </div>

{/* <VideoGallery
  videos={[
    { 
      coverImage=videocoverimg1, 
      videoUrl="https://cdn.shopify.com/videos/c/o/v/dd1de37d3a9e45c095ab5d4ad37d7e34.mp4",
      firstParagraph: "They really understood my work was super, duper important. That makes you feel like someone is really taking care of you, that someone has your back.",
      secondTitle: "- Theresa Debono, Photographer, Malta"
    },
    { 
      coverImage=videocoverimg2, 
       videoUrl="https://cdn.shopify.com/videos/c/o/v/da21d90dfe014d4cb7db92ea09cd15d4.mp4",
      firstParagraph: "Consumers and even professionals who buy something like a hard drive probably expect it will work forever. There are occasions when things fail.  I was happy to call the client and say it's handled, we have your files and are ready to go.",
      secondTitle: "- Dave Prunty, Videographer, Montana, United States"
    }
  ]}
/> */}

        </div>
    </div>
    </>
  )
}

