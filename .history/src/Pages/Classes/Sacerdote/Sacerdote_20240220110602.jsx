import { useState } from 'react';
import sacerImg from '../../../assets/clases/priest.png';
import PriestDisci from './PriestDisci';
import PriestHoly from './PriestHoly';
import PriestShadow from './PriestShadow';
import checkImageType from '../../../helpers/checkImageType';

export default function Monje({ data }) {
  const [spec, setSpec] = useState();

  return (
    <div className="relative w-full  flex flex-col justify-center items-center  p-20">
      <article className="border border-orange-500 rounded-lg w-full relative p-10 flex flex-row justify-between items-center shadow-md shadow-orange-800 h-56 mb-24 bg-slate-950">
        <h1>
          Los sacerdotes usan poderosa magia de sanación para asegurarse de que
          tanto ellos como sus compañeros no son derribados. También controlan
          poderosos hechizos ofensivos a distancia, pero pueden verse
          sobrepasados por los enemigos debido a su fragilidad física y a su
          ligera armadura. Los sacerdotes más experimentados combinan el uso de
          sus hechizos ofensivos y de control con la importancia de mantener
          vivo al resto del grupo.
        </h1>
        <img
          src={sacerImg}
          className="z-10"
          style={{ width: 600, height: 456 }}
        />
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
      {spec && spec === 'disci' && <PriestDisci />}
      {spec && spec === 'priestholy' && <PriestHoly />}
      {spec && spec === 'shadow' && <PriestShadow />}
    </div>
  );
}
