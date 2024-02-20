import { useState } from 'react';
import druidaImg from '../../../assets/clases/druid.png';
import DruidaElemental from './DruidaElemental';
import DruidaFeral from './DruidaFeral';
import DruidTank from './DruidTank';
import DruidaHeal from './DruidaHeal';
import checkImageType from '../../../helpers/checkImageType';

export default function Druida({ data }) {
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
        <img src={druidaImg} className="z-50" />
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
      {spec && spec === 'doodelemental' && <DruidaElemental />}
      {spec && spec === 'doodferal' && <DruidaFeral />}
      {spec && spec === 'doodtank' && <DruidTank />}
      {spec && spec === 'doodheal' && <DruidaHeal />}
    </div>
  );
}
