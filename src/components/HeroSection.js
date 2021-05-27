import React from 'react'
import '.HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
           <video src='/video/video.mp4' autoPlay loop muted/>
        </div>
    )
}

export default HeroSection
