import { useState } from 'react';
import palaImg from '../../../assets/clases/paladin.webp';
import PalaTank from './PalaTank';
import PalaRetry from './PalaRetry';
import PalaHoly from './PalaHoly';
import checkImageType from '../../../helpers/checkImageType';
import { buttonSpec } from '../../../helpers/styles';

export default function Paladin({ data }) {
  const [spec, setSpec] = useState();

  return (
    <div className="relative w-full  flex flex-col justify-center items-center  p-20">
      <article className="border border-orange-500 rounded-lg w-full relative p-10 flex flex-row justify-between items-center shadow-md shadow-orange-800 h-56 mb-24 bg-slate-950">
        <h1>
          Los paladines se colocan justo delante de sus enemigos, confiando en
          su pesada armadura y la sanación para poder sobrevivir a una lluvia de
          ataques. Ya sea con enormes escudos o con aplastantes armas a dos
          manos, los paladines pueden aguantar zarpas y espadas de sus
          compañeros más débiles, pero deben usar la magia sanadora con cuidado
          para asegurarse de que se mantienen en pie.
        </h1>
        <img
          src={palaImg}
          className="z-10"
          style={{ width: 600, height: 456 }}
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
      {spec && spec === 'palatank' && <PalaTank />}
      {spec && spec === 'paladps' && <PalaRetry />}
      {spec && spec === 'palaholy' && <PalaHoly />}
    </div>
  );
}
