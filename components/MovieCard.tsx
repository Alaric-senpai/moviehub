/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { Movie } from '@/types/typesyts'
const MovieCard = ({movie}: {movie:Movie}) => {
  return (
    <div>
        <Link href={`/movie/${movie.id}`} >
        <Card className="overflow-hidden group h-max">
            <div className="relative aspect-[2/3]">
                <img src={movie.medium_cover_image} className="object-cover transition-transform w-full  group-hover:scale-105" alt='image file' />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold line-clamp-1 mb-2"> {movie.title_english} </h3>
              <div className="flex items-center gap-2">
                <Badge variant="secondary"> {movie.year} </Badge>
                <Badge variant="secondary"> {movie.rating} </Badge>
              </div>
            </CardContent>
          </Card>
        </Link>

    </div>
  )
}

export default MovieCard