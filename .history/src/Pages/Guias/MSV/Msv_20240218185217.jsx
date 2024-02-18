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
    <div className="flex flex-col w-full gap-10 mb-10 mt-20 justify-center items-center bg-slate-800">
      <YouTube videoId="Dnx9lhZsI6g" opts={videoOptions} />
      <YouTube videoId="xhcut8-_AAo" opts={videoOptions} />
      <YouTube videoId="k2w4rb982zQ" opts={videoOptions} />
      <YouTube videoId="l2BtI7kQsZk" opts={videoOptions} />
      <YouTube videoId="AP8jC7ePLos" opts={videoOptions} />
      <YouTube videoId="laG4T3AGxBI" opts={videoOptions} />
    </div>
  );
}
