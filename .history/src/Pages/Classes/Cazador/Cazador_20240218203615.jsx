import { useState } from 'react';
import hunterImg from '../../../assets/clases/hunter.png';
import HunterBeast from './HunterBeast';
import HunterMM from './HunterMM';
import HunterSurvival from './HunterSurvival';

export default function Cazador({ data }) {
  const [spec, setSpec] = useState();

  return (
    <div className="relative w-full  flex flex-col justify-center items-center  p-20">
      <article className="border border-orange-500 rounded-lg w-full relative p-10 flex flex-row justify-between items-center shadow-md shadow-orange-800 h-56 mb-24">
        <h1>
          Los druidas poseen una gran variedad de estilos de combate. Pueden
          llevar a cabo todos los roles: sanación, tanque, daño cuerpo a cuerpo
          y daño a distancia. Es vital que los druidas adopten la forma adecuada
          para cada situación ya que cada forma conlleva un propósito diferente.
        </h1>
        <img src={hunterImg} className="" style={{ width: 400 }} />
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
      {spec && spec === 'hunterbeast' && <HunterBeast />}
      {spec && spec === 'hunterpunteria' && <HunterMM />}
      {spec && spec === 'huntersurvival' && <HunterSurvival />}
    </div>
  );
}
