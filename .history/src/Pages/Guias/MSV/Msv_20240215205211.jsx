import React from 'react';
import YouTube from 'react-youtube';

export default function Msv() {
  const videoOptions = {
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 0,
      mute: 0,
      loop: 1,
    },
  };

  return (
    <div className="flex flex-col">
      <YouTube videoId="Dnx9lhZsI6g" opts={videoOptions} />
    </div>
  );
}
