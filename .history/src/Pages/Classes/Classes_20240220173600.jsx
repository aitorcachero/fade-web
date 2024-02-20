import { useState } from 'react';
import { ENUM_CLASS } from '../../mocks/const';
import logo from '../../assets/classes.webp';
import Dk from './Dk/Dk';
import Druida from './Druida/Druida';
import Cazador from './Cazador/Cazador';
import Brujo from './Brujo/Brujo';
import Mago from './Mago/Mago';
import Monje from './Monje/Monje';
import Sacerdote from './Sacerdote/Sacerdote';
import Picaro from './Picaro/Picaro';
import Paladin from './Paladin/Paladin';
import Chaman from './Chaman/Chaman';
import Guerrero from './Guerrero/Guerrero';
import pandariaIMG from '../../assets/pandaria.webp';

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
      <div
        className="flex flex-col w-full h-screen gap-10   justify-center items-center bg-slate-800 "
        style={{
          backgroundImage: `url(${pandariaIMG})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="flex flex-col justify-start">
          <main className="ml-96 flex full">
            {!clase && <img src={logo} className="w-full h-full" />}
            {clase && clase === 1 && (
              <Dk data={ENUM_CLASS.find((v) => v.id === 1)} />
            )}
            {clase && clase === 2 && (
              <Druida data={ENUM_CLASS.find((v) => v.id === 2)} />
            )}
            {clase && clase === 3 && (
              <Cazador data={ENUM_CLASS.find((v) => v.id === 3)} />
            )}
            {clase && clase === 4 && (
              <Mago data={ENUM_CLASS.find((v) => v.id === 4)} />
            )}
            {clase && clase === 5 && (
              <Monje data={ENUM_CLASS.find((v) => v.id === 5)} />
            )}
            {clase && clase === 6 && (
              <Paladin data={ENUM_CLASS.find((v) => v.id === 6)} />
            )}
            {clase && clase === 7 && (
              <Sacerdote data={ENUM_CLASS.find((v) => v.id === 7)} />
            )}
            {clase && clase === 8 && (
              <Picaro data={ENUM_CLASS.find((v) => v.id === 8)} />
            )}
            {clase && clase === 9 && (
              <Chaman data={ENUM_CLASS.find((v) => v.id === 9)} />
            )}
            {clase && clase === 10 && (
              <Brujo data={ENUM_CLASS.find((v) => v.id === 10)} />
            )}
            {clase && clase === 11 && (
              <Guerrero data={ENUM_CLASS.find((v) => v.id === 11)} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
