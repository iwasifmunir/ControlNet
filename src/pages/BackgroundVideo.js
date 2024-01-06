import React from 'react';

export default function BackgroundVideo() {
  return (
    
      <video 
        className="fixed w-full left-1/2 top-1/2 object-cover transform -translate-x-1/2 -translate-y-1/2 z-[-1] h-screen"
        autoPlay
        loop
        muted
      >
        <source src="/video/background.mp4" type="video/mp4" />
      </video>
    
  );
}
