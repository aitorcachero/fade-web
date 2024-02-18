import { useState } from 'react';
import { ENUM_CLASS } from '../../helpers/const';
import logo from '../../assets/fade1.png';
import Dk from './Dk/Dk';
import Druida from './Druida/Druida';
import Cazador from './Cazador/Cazador';
import Brujo from './Brujo/Brujo';

export default function Classes() {
  const [clase, setClase] = useState(false);
  // console.log(ENUM_CLASS.find(v => v.id ===))

  return (
    <div className="w-auto">
      <aside className="w-96 h-screen bg-slate-950  fixed mr-96">
        <ul className="flex flex-col justify-between items-center w-full pt-10">
          {ENUM_CLASS.map((clase, i) => {
            return (
              <li
                key={i}
                className="w-full h-16 hover:bg-zinc-800 flex flex-col justify-center items-center cursor-pointer"
                onClick={() => setClase(i + 1)}
              >
                <p style={{ color: clase.color }} className="text-xl">
                  {clase.class}
                </p>
              </li>
            );
          })}
        </ul>
      </aside>
      <main className="ml-96 flex justify-center items-center">
        {!clase && <img src={logo} />}
        {clase && clase === 1 && (
          <Dk data={ENUM_CLASS.find((v) => v.id === 1)} />
        )}
        {clase && clase === 2 && (
          <Druida data={ENUM_CLASS.find((v) => v.id === 2)} />
        )}
        {clase && clase === 3 && (
          <Cazador data={ENUM_CLASS.find((v) => v.id === 3)} />
        )}
        {clase && clase === 10 && (
          <Brujo data={ENUM_CLASS.find((v) => v.id === 10)} />
        )}
      </main>
    </div>
  );
}
