/* eslint-disable @typescript-eslint/no-explicit-any */
// Mark the component as a client component
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export function MovieDownloadButton({ torrent }: { torrent: any }) {
  const generateMagnetLink = (data: any) => {
    const baseMagnet = 'magnet:?xt=urn:btih:';
    const hash = data.hash;
    const name = encodeURIComponent(data.url.split('/').pop());
    const trackers = [
      'udp://open.demonii.com:1337/announce',
      'udp://tracker.openbittorrent.com:80',
      'udp://torrent.gresille.org:80/announce',
      'udp://tracker.openbittorrent.com:80',
      'udp://tracker.coppersurfer.tk:6969',
      'udp://tracker.leechers-paradise.org:6969',
      'udp://p4p.arenabg.ch:1337'
    ];

    const trackerString = trackers.map(tr => `&tr=${encodeURIComponent(tr)}`).join('');
    const magnetLink = `${baseMagnet}${hash}&dn=${name}${trackerString}`;
    
    // Open the magnet link in a new window
    window.open(magnetLink, '_blank');
  };

  return (
    <Button onClick={() => generateMagnetLink(torrent)}>Download</Button>
  );
}
