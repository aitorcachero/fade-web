import React from 'react';

export default function PalaTank() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2  mb-10">
      <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
        {`Golpe (hasta 7.5%) > Pericia (hasta 15%) > Celeridad > Maestría`}
      </span>
    </div>
  );
}
