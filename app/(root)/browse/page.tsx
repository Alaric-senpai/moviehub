import Moviegrid from '@/components/Movie-grid'
import React from 'react'

const BrowsePage = () => {
  return (
    <div>
        <h2 className="w-full p-6 m-auto text-2xl md:text-5xl">
            Explore movies 
        </h2>
        <Moviegrid />
    </div>
  )
}

export default BrowsePage