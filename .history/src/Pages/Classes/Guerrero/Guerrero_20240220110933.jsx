import { useState } from 'react';
import warrImg from '../../../assets/clases/warrior.png';
import WarArms from './WarArms';
import WarFury from './WarFury';
import WarTank from './WarTank';
import checkImageType from '../../../helpers/checkImageType';
import { buttonSpec } from '../../../helpers/styles';

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
      {spec && spec === 'arms' && <WarArms />}
      {spec && spec === 'fury' && <WarFury />}
      {spec && spec === 'protect' && <WarTank />}
    </div>
  );
}
