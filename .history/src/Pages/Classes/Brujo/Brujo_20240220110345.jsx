import { useState } from 'react';
import brujoImg from '../../../assets/clases/warlock.png';
import Afflicion from './Afflicion';
import Demonologia from './Demonologia';
import Destruccion from './Destruccion';
import checkImageType from '../../../helpers/checkImageType';

export default function Brujo({ data }) {
  const [spec, setSpec] = useState();
  return (
    <div className="relative w-full  flex flex-col justify-center items-center  p-20">
      <article className="border border-orange-500 rounded-lg w-full relative p-10 flex flex-row justify-between items-center shadow-md shadow-orange-800 h-56 mb-24 bg-slate-950">
        <h1>
          Los brujos incineran y destruyen a los enemigos debilitados con una
          combinación de atroces enfermedades y magia oscura. Mientras que sus
          mascotas les protegen y mejoran, los brujos golpean a los enemigos
          desde la distancia. Ya que son taumaturgos físicamente débiles
          desprovistos de una poderosa armadura, los brujos astutos dejan que
          sus esbirros se lleven el grueso de los ataques enemigos para salvar
          su propio pellejo.
        </h1>
        <img src={brujoImg} className="z-50" />
      </article>
      <div className="flex flex-row gap-5 mb-10">
        {data.specs.map((spec, i) => {
          return (
            <button
              className="inline-flex h-12 w-auto animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors z-50 gap-2"
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
      {spec && spec === 'affliction' && <Afflicion />}
      {spec && spec === 'demonology' && <Demonologia />}
      {spec && spec === 'destruction' && <Destruccion />}
    </div>
  );
}
