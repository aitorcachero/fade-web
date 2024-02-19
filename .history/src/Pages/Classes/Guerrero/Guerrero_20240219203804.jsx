import { useState } from 'react';
import warrImg from '../../../assets/clases/warrior.png';

export default function Guerrero({ data }) {
  const [spec, setSpec] = useState();

  return (
    <div className="relative w-full  flex flex-col justify-center items-center  p-20">
      <article className="border border-orange-500 rounded-lg w-full relative p-10 flex flex-row justify-between items-center shadow-md shadow-orange-800 h-56 mb-24 bg-slate-950">
        <h1>
          Los guerreros se equipan con cuidado para el combate y se enfrentan a
          sus enemigos de frente, dejando que los ataques resbalen contra su
          pesada armadura. Usan diversas tácticas de combate y una gran variedad
          de tipos de armas para proteger a los combatientes menos hábiles. Los
          guerreros deben controlar cuidadosamente su ira (el poder detrás de
          sus ataques más fuertes) para maximizar su efectividad en el combate.
        </h1>
        <img
          src={warrImg}
          className="z-50"
          style={{ width: 700, height: 456 }}
        />
      </article>
      <div className="flex flex-row gap-5 mb-10">
        {data.specs.map((spec, i) => {
          return (
            <button
              className="inline-flex h-12 w-40 animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors z-50"
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
      {spec && spec === 'shamanelemental' && <ShamanEle />}
      {spec && spec === 'shamanenhancement' && <ShamanMejora />}
      {spec && spec === 'shamanheal' && <ShamanResto />}
    </div>
  );
}
