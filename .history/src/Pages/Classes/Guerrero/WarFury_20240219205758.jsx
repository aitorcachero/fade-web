import React from 'react';

export default function WarFury() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-2  mb-10">
        <h2 className="text-2xl">Estadísticas sin trinket Prismático (5.4)</h2>
        <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
          {`Golpe (hasta 7.5%) > Pericia (hasta 7.5%) > Fuerza > Crítico > Maestría > Celeridad > Golpe (hasta 26.5%)r`}
        </span>

        <h2 className="text-2xl">Estadísticas con trinket Prismático (5.4)</h2>
        <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
          {`Golpe (hasta 7.5%) > Pericia (hasta 7.5%) > Crítico > Maestría > Fuerza > Celeridad > Golpe (hasta 26.5%)`}
        </span>
      </div>
    </>
  );
}
