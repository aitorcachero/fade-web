import { useState } from 'react';
import { ENUM_CLASS } from '../../helpers/const';
import logo from '../../assets/fade1.png';

export default function Classes() {
  const [clase, setClase] = useState(false);
  const handleClick = (clase) => {
    console.log(clase);
  };
  return (
    <div>
      <aside className="w-96 h-screen bg-slate-950  fixed">
        <ul className="flex flex-col justify-between items-center w-full pt-10">
          {ENUM_CLASS.map((clase, i) => {
            return (
              <li
                key={i}
                className="w-full h-16 hover:bg-zinc-800 flex flex-col justify-center items-center cursor-pointer"
                onClick={() => handleClick(clase)}
              >
                <p style={{ color: clase.color }} className="text-xl">
                  {clase.class}
                </p>
              </li>
            );
          })}
        </ul>
      </aside>
      <main>{!clase && <img src={logo} />}</main>
    </div>
  );
}
