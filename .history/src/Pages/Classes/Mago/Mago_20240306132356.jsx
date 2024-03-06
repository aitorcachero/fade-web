import { useState } from 'react';
import magoImg from '../../../assets/clases/mage.webp';
import MageArcane from './MageArcane';
import MageFrost from './MageFrost';
import MageFire from './MageFire';
import checkImageType from '../../../helpers/checkImageType';
import { buttonSpec } from '../../../helpers/styles';

export default function Mago({ data }) {
  const [spec, setSpec] = useState();

  return (
    <div className="relative w-full  flex flex-col justify-center items-center  p-20">
      <article className="border border-orange-500 rounded-lg w-full relative p-10 flex flex-row justify-between items-center shadow-md shadow-orange-800 h-56 mb-24 bg-slate-950">
        <h1>
          Los magos destruyen a sus enemigos con encantamientos arcanos. Aunque
          controlan poderosos hechizos ofensivos, los magos son frágiles y su
          armadura es ligera, lo que los hace particularmente vulnerables a los
          ataques a corta distancia. Los magos sabios usan sus hechizos con
          cuidado para mantener a sus enemigos a distancia o retenerlos en el
          lugar.
        </h1>
        <img src={magoImg} className="z-10" style={{ width: 500 }} />
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
      {spec && spec === 'magearcane' && <MageArcane />}
      {spec && spec === 'magefrost' && <MageFrost />}
      {spec && spec === 'magefire' && <MageFire />}
    </div>
  );
}
