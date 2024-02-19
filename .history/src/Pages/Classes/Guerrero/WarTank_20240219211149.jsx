import React from 'react';

export default function WarTank() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-5 mb-10 ">
        <div className="flex flex-col">
          <h2 className="text-2xl text-orange-500">
            Estadísticas para maximizar esquivar
          </h2>
          <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
            {`Golpe (hasta 7.5%) > Pericia (hasta 15%) > Parada y Esquivar > Maestría`}
          </span>
          <p>
            Esta estrategia aprovecha el hecho de que{' '}
            <span className="text-orange-500 font-bold">Contestación</span> hace
            que tus esquivas y paradas aumenten tu golpe crítico, lo que a su
            vez aumenta tu generación de rabia (ya que los golpes críticos con{' '}
            <span className="text-orange-500 font-bold">Devastar</span> y{' '}
            <span className="text-orange-500 font-bold">Golpe de escudo</span>{' '}
            te proporcionan rabia).
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-orange-500">
            Estadísticas para maximizar el daño
          </h2>
          <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
            {`Golpe (hasta 7.5%) > Pericia (hasta 15%) > Crítico > Maestría`}
          </span>
          <p>
            Esta estrategia no tiene en cuenta ni esquivar ni parada (lo que se
            traduce en un menor número de esquivas y paradas), sino que va
            directamente a golpe crítico, lo que te proporciona más rabia.
          </p>
        </div>
      </div>
    </>
  );
}
