import { useState } from 'react';
import { raidProgress } from '../../helpers/progress';
import logo from '../../assets/fade1.png';
import Msv from './MSV/Msv';
import Hof from './HOF/Hof';
import Toes from './TOES/Toes';
import Tot from './TOT/Tot';
import Soo from './SOO/Soo';

export default function Guias() {
  const [raid, setRaid] = useState(false);
  console.log(raid);
  return (
    <div className="w-auto flex flex-col">
      <nav className="w-full h-24  bg-slate-950 flex ">
        <ul className="flex flex-row h-full justify-between items-center w-full ">
          {raidProgress.map((raid, i) => {
            return (
              <li
                key={i}
                className="w-full h-16 hover:bg-zinc-800 flex flex-col justify-center items-center cursor-pointer"
                onClick={() => setRaid(raid.id)}
              >
                <p className="text-xl text-orange-500">{raid.name}</p>
              </li>
            );
          })}
        </ul>
      </nav>
      <main className="ml-96 flex justify-center items-center">
        {!raid && <img src={logo} />}
        {raid && raid === 1 && <Msv />}
        {raid && raid === 2 && <Hof />}
        {raid && raid === 3 && <Toes />}
        {raid && raid === 4 && <Tot />}
        {raid && raid === 5 && <Soo />}
      </main>
    </div>
  );
}
