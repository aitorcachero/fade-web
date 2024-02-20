import { useState } from 'react';
import rogueImg from '../../../assets/clases/rogue.png';
import RogueAssasin from './RogueAssasin';
import RogueCombat from './RogueCombat';
import RogueSub from './RogueSub';
import checkImageType from '../../../helpers/checkImageType';

export default function Picaro({ data }) {
  const [spec, setSpec] = useState();

  return (
    <div className="relative w-full  flex flex-col justify-center items-center  p-20">
      <article className="border border-orange-500 rounded-lg w-full relative p-10 flex flex-row justify-between items-center shadow-md shadow-orange-800 h-56 mb-24 bg-slate-950">
        <h1>
          Los pícaros a menudo inician sus batallas entre las sombras,
          comenzando con sanguinarios golpes cuerpo a cuerpo. En batallas
          largas, usan ataques sucesivos, cuidadosamente seleccionados para
          preparar al enemigo para el golpe final. Los pícaros deben tener
          especial cuidado al seleccionar a sus objetivos para no malgastar sus
          ataques de combo y deben saber cuándo esconderse o huir si la batalla
          se vuelve contra ellos.
        </h1>
        <img
          src={rogueImg}
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
      {spec && spec === 'assasin' && <RogueAssasin />}
      {spec && spec === 'combat' && <RogueCombat />}
      {spec && spec === 'sublety' && <RogueSub />}
    </div>
  );
}
