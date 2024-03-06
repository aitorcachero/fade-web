import { useState } from 'react';
import hunterImg from '../../../assets/clases/hunter.webp';
import HunterBeast from './HunterBeast';
import HunterMM from './HunterMM';
import HunterSurvival from './HunterSurvival';
import checkImageType from '../../../helpers/checkImageType';
import { buttonSpec } from '../../../helpers/styles';

export default function Cazador({ data }) {
  const [spec, setSpec] = useState();

  return (
    <div className="relative w-full  flex flex-col justify-center items-center  p-20">
      <article className="border border-orange-500 rounded-lg w-full relative p-10 flex flex-row justify-between items-center shadow-md shadow-orange-800 h-56 mb-24 bg-slate-950">
        <h1 className="text-pretty">
          Los cazadores luchan contra sus enemigos a distancia o de cerca y
          ordenan a sus mascotas que ataquen mientras preparan sus flechas,
          disparan sus armas de fuego o blanden sus armas de asta. Si bien sus
          armas son efectivas a corta y larga distancia, los cazadores son
          también extremadamente ágiles. Son capaces de evadir o entorpecer a
          sus enemigos para controlar el espacio de combate.
        </h1>
        <img
          src={hunterImg}
          className="z-50"
          style={{ width: 600, height: 416 }}
        />
      </article>
      <div className="flex flex-row gap-5 mb-10">
        {data.specs.map((spec, i) => {
          return (
            <button
              className={buttonSpec}
              key={i}
              onClick={() => {
                setSpec(spec.priority);
              }}
            >
              {spec.nombre}
              <img src={checkImageType(spec.type)} width={40} />
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
