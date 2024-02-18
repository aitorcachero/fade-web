import { useState } from 'react';
import { raidProgress } from '../../helpers/progress';
import logo from '../../assets/fade1.png';

export default function Guias() {
  const [raid, setRaid] = useState(false);
  const handleClick = () => {};
  return (
    <div className="w-full flex flex-row">
      <aside className="w-96 h-screen bg-slate-950 p-20  ">
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
      <main className="flex w-full justify-center items-center">
        {!raid && <img src={logo} />}
      </main>
    </div>
  );
}
