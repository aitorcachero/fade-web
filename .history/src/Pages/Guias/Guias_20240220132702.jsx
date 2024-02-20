import { useState } from 'react';
import { GUIAS_RAID } from '../../mocks/guias';
import pandariaIMG from '../../assets/pandaria.webp';

import YouTube from 'react-youtube';

export default function Guias() {
  const [raid, setRaid] = useState(false);

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
    <div className="w-auto flex flex-col">
      <nav className="w-full h-36  bg-slate-950 flex ">
        <ul className="flex flex-row h-full justify-between items-center w-full ">
          {GUIAS_RAID.map((raid, i) => {
            return (
              <li
                key={i}
                className="w-full h-full hover:bg-zinc-800 flex flex-col justify-center items-center cursor-pointer text-orange-500 text-xl font-bold relative"
                onClick={() => {
                  setRaid(GUIAS_RAID[i]);
                }}
              >
                <img
                  src={raid.img}
                  className="border border-slate-600 w-full h-full"
                />
                <p className="absolute bottom-0">{raid.nombre}</p>
              </li>
            );
          })}
        </ul>
      </nav>
      <main className=" flex justify-center items-center">
        {!raid && (
          <div className="h-full">
            <img src={pandariaIMG} width={'100%'} className="object-contain" />
          </div>
        )}
        {raid && (
          <div className="flex flex-col w-full gap-10 mb-10 mt-14 justify-center items-center bg-slate-800">
            {raid.videos.map((video, i) => {
              return (
                <div key={i} className="rounded-xl overflow-hidden">
                  <YouTube videoId={video} opts={videoOptions} />
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
