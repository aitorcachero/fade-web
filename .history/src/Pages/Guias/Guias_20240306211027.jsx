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

      <LiteYouTubeEmbed id="8TOwIZ2pn30" />
      <LiteYouTubeEmbed id="8TOwIZ2pn30" />
      <main className=" flex justify-center items-center">
        {raid && (
          <div className="flex flex-col mt-10 mb-10 gap-10 ">
            {raid.videos.map((video, i) => {
              return (
                <div key={i} className="rounded-xl overflow-hidden ">
                  <YouTubeLite video={video} />
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
