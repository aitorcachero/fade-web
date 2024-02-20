import { useState } from 'react';
import { GUIAS_RAID } from '../../mocks/guias';
import logo from '../../assets/fade1.png';
import Msv from './MSV/Msv';
import Hof from './HOF/Hof';
import Toes from './TOES/Toes';
import Tot from './TOT/Tot';
import Soo from './SOO/Soo';
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
      <nav className="w-full h-24  bg-slate-950 flex ">
        <ul className="flex flex-row h-full justify-between items-center w-full ">
          {GUIAS_RAID.map((raid, i) => {
            return (
              <li
                key={i}
                className="w-full h-full hover:bg-zinc-800 flex flex-col justify-center items-center cursor-pointer text-orange-500"
                onClick={(e) => {
                  setRaid();
                  console.log(e.target.value);
                }}
              >
                {raid.nombre}
              </li>
            );
          })}
        </ul>
      </nav>
      <main className=" flex justify-center items-center">
        {!raid && <img src={logo} />}
        {raid && (
          <div className="flex flex-col w-full gap-10 mb-10 mt-14 justify-center items-center bg-slate-800">
            {raid.videos.map((video, i) => {
              return <YouTube videoId={video} opts={videoOptions} key={i} />;
            })}
          </div>
        )}
        {/* {raid && raid === 1 && <Msv />}
        {raid && raid === 2 && <Hof />}
        {raid && raid === 3 && <Toes />}
        {raid && raid === 4 && <Tot />}
        {raid && raid === 5 && <Soo />} */}
      </main>
    </div>
  );
}
