import { useState } from 'react';
import { raidProgress } from '../../helpers/progress';

export default function Guias() {
  const [raid, setRaid] => useState(false)
  const handleClick = () => {};
  return (
    <div className="w-auto">
      <aside className="w-96 h-screen bg-slate-950   mr-96">
        <ul className="flex flex-col justify-between items-center w-full pt-10">
          {raidProgress.map((raid, i) => {
            return (
              <li
                key={i}
                className="w-full h-16 hover:bg-zinc-800 flex flex-col justify-center items-center cursor-pointer"
                onClick={() => handleClick()}
              >
                <p className="text-xl text-orange-500">{raid.name}</p>
              </li>
            );
          })}
        </ul>
      </aside>
      <main className="ml-96 flex justify-center items-center">

      </main>
    </div>
  );
}
