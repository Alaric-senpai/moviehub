/* eslint-disable @typescript-eslint/no-explicit-any */
 

export async function getMovies(){
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?limit=50');

    if(!response.ok){
        throw new Error('error fetching data')
    }

    const movies = await response.json()

    return movies.data.movies
}

export async function getSearchResult(search:string){
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?limit=50&query_term=${search}`);

    if(!response.ok){
        throw new Error('error fetching data')
    }

    const movies = await response.json()

    return movies.data
}


export async function getMovie(id: string) {
    const res = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`)
    const data = await res.json()
    return data.data.movie
  }

  export function generateMagnetLink(data: any) {
    const baseMagnet = 'magnet:?xt=urn:btih:';
    const hash = data.hash; // Torrent hash
    const name = encodeURIComponent(data.url.split('/').pop()); // Extract and URL-encode the movie name from the URL
    const trackers = [
      'udp://open.demonii.com:1337/announce',
      'udp://tracker.openbittorrent.com:80',
      'udp://torrent.gresille.org:80/announce',
      'udp://tracker.openbittorrent.com:80',
      'udp://tracker.coppersurfer.tk:6969',
      'udp://tracker.leechers-paradise.org:6969',
      'udp://p4p.arenabg.ch:1337'
    ];
  
    // Construct the tracker string
    const trackerString = trackers.map(tr => `&tr=${encodeURIComponent(tr)}`).join('');
  
    // Combine all parts to form the complete magnet link
    const magnetLink = `${baseMagnet}${hash}&dn=${name}${trackerString}`;
    
    // Open the magnet link in a new window
    window.open(magnetLink, '_blank');
  }
  