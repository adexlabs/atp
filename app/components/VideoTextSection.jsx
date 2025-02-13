import React from 'react'
import videocoverimg1 from '~/assets/coverimg1.jpeg';
import videocoverimg2 from '~/assets/coverimg2.jpeg';
export default function VideoTextSection () {
  return (
    <>
    <div className='video-text'>
        <h2>What Customers are Saying</h2>
        <p>"They really understood my work was super, duper important. That makes you feel like someone is really taking care of you, that someone has your back."</p>
        <p>- Theresa Debono, Photographer, Malta</p>
        <p>"Consumers and even professionals who buy something like a hard drive probably expect it will work forever.  There are occasions when things fail.  I was happy to call the client and say it's handled, we have your files and are ready to go."</p>
        <p>- Dave Prunty, Videographer, Montana, United States</p>
        <h2>Watch Customer Videos</h2>

        <div className='video-wrapper'>
        <VideoSection
        videoUrl="https://cdn.shopify.com/videos/c/o/v/ce8714bb41f042428c3dfa9e499eaaa2.mp4"
        coverImage={videocoverimg1}
      />
          <VideoSection
        videoUrl="https://cdn.shopify.com/videos/c/o/v/ce8714bb41f042428c3dfa9e499eaaa2.mp4"
        coverImage={videocoverimg2}
      />
        </div>
    </div>
    </>
  )
}

