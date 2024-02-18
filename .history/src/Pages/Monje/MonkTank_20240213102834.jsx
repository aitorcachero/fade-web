import React from 'react';

export default function MonkTank() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2  mb-10">
      <h2 className="text-2xl">
        Estadísticas orientadas a minimizar daño recibido
      </h2>
      <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
        {`Pericia (hasta 15%) > Golpe (hasta 7.5%) > Maestría > Agilidad > Crítico > Celeridad (entra 4K y 11K)`}
      </span>
      <p>
        Esta prioridad de estadísticas es mejor para los jugadores con menos
        experiencia y para los que se enfrentan a jefes muy duros. Minimiza el
        efecto de los errores personales al reducir de forma pasiva el daño
        recibido.
      </p>
      <h2 className="text-2xl">Estadísticas orientadas a priorizar daño</h2>
      <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
        {`Pericia (hasta 15%) > Golpe (hasta 7.5%) >  Agilidad > Crítico > Celeridad (entra 4K y 11K) > Maestría`}
      </span>
      <p>
        Esta prioridad hace hincapié en el índice de golpe crítico, que aumenta
        tu tiempo de actividad de Icono de brebaje evasivo. El equipo de evasión
        es el que más reduce el daño total recibido, pero no es muy fiable y te
        hace vulnerable a picos de daño impredecibles. Es más adecuado para
        raids de 10 jugadores.
      </p>
      <h2 className="text-2xl">Estadísticas balanceadas</h2>
      <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
        {`Pericia (hasta 15%) > Golpe (hasta 7.5%) >  Agilidad > Maestría y Crítico por igual > Celeridad (entra 4K y 11K)`}
      </span>
      <p>
        Esta prioridad de estadísticas combina la Valoración de Golpe Crítico y
        la Valoración de Maestría, y es un buen compromiso entre las dos
        prioridades de estadísticas mencionadas anteriormente.
      </p>
    </div>
  );
}

//  Damage Smoothing
// This stat priority is best for less experience players, and those who aregoing up against very hard-hitting bosses. It minimises the effect of personalmistakes by passively reducing burst damage taken.

// Expertise Rating (until 15%) and Hit Rating (until 7.5%);
// Mastery Rating;
// Agility;
// Critical Strike Rating;
// Haste Rating (between 4,000 and 11,000, depending on personalpreference).
// 1.2. Avoidance/DPS
// This priority emphasises Critical Strike Rating, which increases yourElusive Brew Icon Elusive Brew uptime. Avoidance gearing will reduce your total damagetaken the most, but it is not very reliable, and it makes you vulnerable tounpredictable spikes of damage. This is best suited for 10-man raiding.

// Expertise Rating (until 15%) and Hit Rating (until 7.5%);
// Agility;
// Critical Strike Rating;
// Haste Rating (between 4,000 and 11,000, depending on personalpreference);
// Mastery Rating.
// 1.3. Hybrid Survival/DPS
// This stat priority combines both Critical Strike Rating and MasteryRating, and it is a good compromise between the two stat priorities listedabove.

// Expertise Rating (until 15%) and Hit Rating (until 7.5%);
// Agility;
// Mastery Rating and Critical Strike Rating in equal amounts;
// Haste Rating (between 4,000 and 11,000, depending on personalpreference).
