/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import YouTube from 'react-youtube'

interface TrailerPlayerProps {
  youtubeId: string
}

export default function TrailerPlayer({ youtubeId }: TrailerPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const opts = {
    // height: '390',
    // width: '640',
    playerVars: {
      autoplay: 1,
    },
  }

  const onReady = (event: { target: { pauseVideo: () => void } }) => {
    if (!isPlaying) {
      event.target.pauseVideo()
    }
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  if (!isPlaying) {
    return (
      <div 
        className="relative cursor-pointer" 
        onClick={handlePlay}
        style={{ width: '640px', height: '390px' }}
      >
        <img 
          src={`https://img.youtube.com/vi/${youtubeId}/0.jpg`} 
          alt="Trailer thumbnail" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 5v10l8-5-8-5z" />
            </svg>
          </div>
        </div>
      </div>
    )
  }

  return <YouTube videoId={youtubeId} opts={opts} onReady={onReady} className=' m-auto  min-h-32' />
}

