/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
// import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Star } from 'lucide-react'
import TrailerPlayer from "@/components/YoutubePlayer";
import { MovieDownloadButton } from "@/components/DownloadButton";
import { getMovie } from "@/lib/yts";



export default async function MoviePage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  // const { id } = await params;

  const movie = await getMovie(params.id)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-1">
          <div className="">
            <img
              src={movie.large_cover_image}
              alt={movie.title}
              className="object-cover rounded-lg  h-4/6 w-4/6"
            />
          </div>
          <div className="  overflow-x-hidden gap-4 flex  flex-col">

            <div>
                <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
                <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{movie.year}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{movie.runtime} min</span>
                </div>
                <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    <span>{movie.rating}/10</span>
                </div>
                </div>
                <p className="text-muted-foreground mb-6">{movie.description_full || movie.description_intro}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres.map((genre: string) => (
                    <Badge key={genre} variant="secondary">
                    {genre}
                    </Badge>
                ))}
                </div>
                <div className="space-y-4">
                {movie.torrents.map((torrent: any) => (
                    <div key={torrent.url} className="flex items-center gap-4">
                    <Badge className="p-4">{torrent.quality}</Badge>
                    <span className="text-sm text-muted-foreground w-20 ">{torrent.size}</span>
                    {/* <Button onClick={() => generateMagnetLink(torrent)}>Download</Button> */}
                    <MovieDownloadButton torrent={torrent} />

                    </div>
                ))}
                </div>

            </div>
          </div>
        </div>
        <div className="w-full">
        <div>
            <TrailerPlayer youtubeId={movie.yt_trailer_code} />

            </div>
        </div>
      </div>
    </div>
  )
}

