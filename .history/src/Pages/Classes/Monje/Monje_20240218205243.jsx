import { useState } from 'react';
import monkImg from '../../../assets/clases/monk.png';

export default function Monje({ data }) {
  const [spec, setSpec] = useState();

  return (
    <div className="relative w-full  flex flex-col justify-center items-center  p-20">
      <article className="border border-orange-500 rounded-lg w-full relative p-10 flex flex-row justify-between items-center shadow-md shadow-orange-800 h-56 mb-24">
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
              className="inline-flex h-12 w-40 animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors z-20"
              key={i}
              onClick={() => {
                setSpec(spec.priority);
              }}
            >
              {spec.nombre}
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
