import { useState } from 'react';
import shamanImg from '../../../assets/clases/shaman.png';
import ShamanEle from './ShamanEle';
import ShamanMejora from './ShamanMejora';
import ShamanResto from './ShamanResto';
import checkImageType from '../../../helpers/checkImageType';
import { buttonSpec } from '../../../helpers/styles';

export default function Chaman({ data }) {
  const [spec, setSpec] = useState();

  return (
    <div className="relative w-full  flex flex-col justify-center items-center  p-20">
      <article className="border border-orange-500 rounded-lg w-full relative p-10 flex flex-row justify-between items-center shadow-md shadow-orange-800 h-56 mb-24 bg-slate-950">
        <h1>
          Los druidas poseen una gran variedad de estilos de combate. Pueden
          llevar a cabo todos los roles: sanación, tanque, daño cuerpo a cuerpo
          y daño a distancia. Es vital que los druidas adopten la forma adecuada
          para cada situación ya que cada forma conlleva un propósito diferente.
        </h1>
        <img
          src={shamanImg}
          className="z-50"
          style={{ width: 700, height: 456 }}
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
      {spec && spec === 'shamanelemental' && <ShamanEle />}
      {spec && spec === 'shamanenhancement' && <ShamanMejora />}
      {spec && spec === 'shamanheal' && <ShamanResto />}
    </div>
  );
}
