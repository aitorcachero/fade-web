import { useState } from 'react';
import monkImg from '../../../assets/clases/monk.png';
import MonkTank from './MonkTank';
import MonkDps from './MonkDps';
import MonkHeal from './MonkHeal';
import checkImageType from '../../../helpers/checkImageType';

export default function Monje({ data }) {
  const [spec, setSpec] = useState();

  return (
    <div className="relative w-full  flex flex-col justify-center items-center  p-20">
      <article className="border border-orange-500 rounded-lg w-full relative p-10 flex flex-row justify-between items-center shadow-md shadow-orange-800 h-56 mb-24 bg-slate-950">
        <h1>
          Sea cual sea el papel que desempeñen en el combate, los monjes suelen
          centrarse en sus pies y manos para las acciones principales, mientras
          que su fuerte conexión con su chi interno les vale para potenciar sus
          facultades. Además, los monjes son capaces de sanar a sus aliados al
          tiempo que infligen daño a sus enemigos.
        </h1>
        <img src={monkImg} className="z-10" />
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
      {spec && spec === 'monktank' && <MonkTank />}
      {spec && spec === 'monkdps' && <MonkDps />}
      {spec && spec === 'monkheal' && <MonkHeal />}
    </div>
  );
}
