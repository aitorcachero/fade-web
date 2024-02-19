import React from 'react'

export default function PriestHoly() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2  mb-10">
    <h2 className="text-2xl">Estadísticas para raids de 10J</h2>
      <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
        {`Intelecto > Espíritu > Celeridad (hasta conseguir el cap) >  Crítico > Maestría`}
      </span>

      <h2 className="text-2xl">Estadísticas para raids de 25J</h2>
      <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
        {`Intelecto > Espíritu > Maestría >  Crítico > Celeridad`}
      </span>
    </div>
  );
}



1.2. 10-man
Intellect;
Spirit;
Haste Rating (until the soft cap);
Critical Strike Rating;
Mastery Rating.

1.1. 25-man
Intellect;
Spirit;
Mastery Rating;
Critical Strike Rating;
Haste Rating.
