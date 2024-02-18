import { useState } from 'react';
import { raidProgress } from '../../helpers/progress';
import logo from '../../assets/fade1.png';
import Msv from './MSV/Msv';
import Hof from './HOF/Hof';
import Toes from './TOES/Toes';

export default function Guias() {
  const [raid, setRaid] = useState(false);
  console.log(raid);
  return (
    <div className="w-full flex flex-row">
      <aside className="w-2/6 min-h-screen bg-slate-950  ">
        <ul className="flex flex-col justify-between items-center w-full pt-10">
          {raidProgress.map((raid, i) => {
            return (
              <li
                key={i}
                className="w-full h-16 hover:bg-zinc-800 flex flex-col justify-center items-center cursor-pointer"
                onClick={() => setRaid(i)}
              >
                <p className="text-xl text-orange-500">{raid.name}</p>
              </li>
            );
          })}
        </ul>
      </aside>
      <main className="flex w-full justify-center items-center">
        {!raid && <img src={logo} />}
        {raid && raid === 0 && <Msv />}
        {raid && raid === 1 && <Hof />}
        {raid && raid === 2 && <Toes />}
      </main>
    </div>
  );
}
