import { useState } from 'react';
import dkImg from '../../../assets/clases/dk.png';
import DkFrost from './DkFrost';
import DkProfano from './DkProfano';
import DkSangre from './DkSangre';

export default function Dk({ data }) {
  const [spec, setSpec] = useState();

  return (
    <div className="relative w-full  flex flex-col justify-center items-center  p-20">
      <article className="border border-orange-500 rounded-lg w-full relative p-10 flex flex-row justify-between items-center shadow-md shadow-orange-800 h-56 mb-24">
        <h1>
          Los caballeros de la Muerte se enfrentan a sus enemigos de cerca,
          asestando golpes con sus armas con magia oscura que vuelve a los
          enemigos vulnerables o les inflige daño con poder oscuro. Arrastran a
          los enemigos a enfrentamientos uno contra uno, obligándoles a
          concentrar sus ataques lejos de sus compañeros más débiles. Para
          evitar que sus enemigos escapen de sus garras, los caballeros de la
          Muerte deben ser conscientes del poder que invocan de las runas y
          controlar sus ataques de forma apropiada.
        </h1>
        <img src={dkImg} className="" />
      </article>
      <div className="flex flex-row gap-5 mb-10">
        {data.specs.map((spec, i) => {
          return (
            <button
              className="inline-flex h-12 w-40 animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors "
              key={i}
              onClick={() => {
                setSpec(spec.priority);
              }}
            >
              {spec.nombre}
            </button>
          );
        })}
      </div>
      {spec && spec === 'dkfrost' && <DkFrost />}
      {spec && spec === 'dkunholy' && <DkProfano />}
      {spec && spec === 'dkblood' && <DkSangre />}
    </div>
  );
}
