import { Suspense, useState } from 'react';
import { GUIAS_RAID } from '../../mocks/guias';
import pandariaIMG from '../../assets/pandaria.webp';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import YouTube from 'react-youtube';
import Loader from '../../components/Loader/Loader';
import YouTubeLite from '../../components/YouTubeLite/YouTubeLite';

export default function Guias() {
  const [raid, setRaid] = useState(false);

  return (
    <div className="w-auto flex flex-col">
      <nav className="w-full h-36  bg-slate-950 flex ">
        <ul className="flex flex-row h-full justify-between items-center w-full ">
          {GUIAS_RAID.map((raid, i) => {
            return (
              <li
                key={i}
                className="w-full h-full hover:bg-zinc-800 flex flex-col justify-center items-center cursor-pointer text-orange-500 text-xl font-bold relative opacity-80 hover:opacity-100 hover:brightness-150"
                onClick={() => {
                  setRaid(GUIAS_RAID[i]);
                }}
              >
                <img
                  src={raid.img}
                  className="border border-slate-600 w-full h-full  "
                />
                <p className="absolute bottom-0">{raid.nombre}</p>
              </li>
            );
          })}
        </ul>
      </nav>

      {raid && (
        <main className="px-[600px]">
          <div className="flex flex-col mt-10 mb-10 gap-10 ">
            {raid.videos.map((video, i) => {
              return (
                <div
                  key={i}
                  className="rounded-xl   bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
                >
                  <LiteYouTubeEmbed
                    id={video}
                    adNetwork={true}
                    params=""
                    playlist={false}
                    playlistCoverId="L2vS_050c-M"
                    poster="hqdefault"
                    title="YouTube Embed"
                    noCookie={true}
                  />
                </div>
              );
            })}
          </div>
        </main>
      )}
    </div>
  );
}

{
  /* <main className="flex justify-center items-center"></main> */
}
