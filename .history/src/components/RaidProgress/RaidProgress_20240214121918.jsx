import { useState } from 'react';
import bgRaidProgress from '../../assets/bgRaidProgress.jpeg';
import { raidProgress } from '../../helpers/progress.js';

export default function RaidProgress() {
  const [modeProgress, setModeProgress] = useState(false);
  const [coor, setCoor] = useState(false);
  const calcWidth = (length, defeated) => {
    return (100 * defeated) / length;
  };

  const getColor = (length, defeated) => {
    const data = (100 * defeated) / length;
    if (data < 40) return 'bg-red-700';
    if (data < 70) return 'bg-orange-700';
    if (data < 101) return 'bg-green-700';
  };

  const handleMouse = (mod) => {
    const obj = {
      raid: mod.raid,
      type: mod.type,
      bosses: mod.defeated.map((v, i) => {
        return `${v} x ${mod.bosses[i]}`;
      }),
    };
    // const raid = mod;
    // console.log(raid);
    // const array = mod.defeated.map((v, i) => {
    //   return `${v} x ${mod.bosses[i]}`;
    // });
    setModeProgress(obj);
    console.log(obj);
  };

  const handleMouseMove = (e) => {
    setCoor({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      {modeProgress && (
        <div
          className="border flex flex-col absolute bg-gray-900 p-10 z-40"
          style={{ top: coor.y + 16, left: coor.x + 16 }}
        >
          <p className="border border-b-slate-500">
            {modeProgress.raid} - {modeProgress.type}
          </p>
          <br className="underline border border-gray-300"></br>
          {modeProgress.bosses.map((boss, i) => {
            return (
              <p
                className=""
                key={i}
                style={{ color: `${boss[0] === '1' ? 'green' : 'gray'}` }}
              >
                {boss}
              </p>
            );
          })}
        </div>
      )}
      <h2 className="gap-10 px-14 text-3xl">Progreso de bandas</h2>
      <div className="w-full p-14 flex flex-col lg:flex-row gap-10">
        {raidProgress.map((raid, i) => {
          return (
            <article
              key={i}
              className="w-80 flex flex-col justify-center border"
              style={{
                backgroundImage: `url(${bgRaidProgress})`,
                backgroundSize: 'contain',
                border: '1px solid #3f4f56',
              }}
            >
              <img src={raid.img} className="h-36" />
              <main className="flex flex-col gap-10 p-5 h-64 justify-center">
                <h2 className="text-xl text-orange-500">{raid.name}</h2>
                {raid.modalidad.map((mod, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-row justify-between h-7 w-full text-center items-center"
                    >
                      <p className="text-xs text-orange-500">{mod?.type}</p>
                      <div className="w-52 h-full border flex justify-center item">
                        <div
                          className="w-full h-full bg-gray-200 dark:bg-gray-700 relative "
                          onMouseEnter={() => {
                            handleMouse(mod, raid);
                          }}
                          onMouseLeave={() => setModeProgress(false)}
                          onMouseMove={handleMouseMove}
                        >
                          <div
                            className={`${getColor(
                              mod?.defeated.length,
                              mod?.defeated.reduce((v, a) => v + a, 0)
                            )} h-full`}
                            style={{
                              width: `${calcWidth(
                                mod?.defeated.length,
                                mod?.defeated.reduce((v, a) => v + a, 0)
                              )}%`,
                            }}
                          ></div>
                          <p className="text-center absolute inset-0">
                            {mod?.defeated.reduce((v, a) => v + a, 0)}/
                            {mod?.defeated.length}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </main>
            </article>
          );
        })}
      </div>
    </>
  );
}
