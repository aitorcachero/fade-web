export default function DkSangre() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-2  mb-10">
        <article className="border border-orange-500 rounded-lg  relative p-10 flex  items-center shadow-md shadow-orange-800  mb-24 bg-slate-950  flex-col justify-center gap-2">
          <h1 className="text-orange-500 text-2xl">
            Estadísticas orientadas a raid de 10J
          </h1>
          <h2 className="text-2xl">Estadísticas orientadas a supervivencia</h2>
          <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
            {`Maestría > Pericia (hasta 7.5%) > Golpe (hasta 7.5%) > Esquivar y Parada > Celeridad `}
          </span>

          <h2 className="text-2xl">Estadísticas balanceadas</h2>
          <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
            {`Maestría > Pericia (hasta 7.5%) > Golpe (hasta 7.5%) > Celeridad`}
          </span>

          <h2 className="text-2xl">Estadísticas ofensivas</h2>
          <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
            {`Celeridad > Pericia (hasta 7.5%) > Golpe (hasta 7.5%) > Maestría`}
          </span>

          <h1 className="text-orange-500 text-2xl mt-10">
            Estadísticas orientadas a raid de 25J
          </h1>
          <h2 className="text-2xl">Estadísticas orientadas a supervivencia</h2>
          <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
            {`Maestría > Esquivar y Parada > Pericia (hasta 7.5%) > Golpe (hasta 7.5%) >  Celeridad `}
          </span>

          <h2 className="text-2xl">Estadísticas balanceadas</h2>
          <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
            {`Maestría > Pericia (hasta 7.5%) > Golpe (hasta 7.5%) > Esquivar y Parada > Celeridad`}
          </span>

          <h2 className="text-2xl">Estadísticas ofensivas</h2>
          <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
            {`Maestría > Pericia (hasta 7.5%) > Golpe (hasta 7.5%) > Celeridad`}
          </span>

          <br className="m-10"></br>

          <article className="flex flex-col gap-6 border rounded p-10 w-3/4">
            <p className=" text-center">
              El índice de maestría es una estadística importante para un
              Caballero de la Muerte Sangrienta. Querrás obtener la mayor
              cantidad posible de él, en todas tus piezas de equipo, así como a
              través de gemas, encantamientos y reforja. Te proporciona escudos
              más grandes de Maestría: Escudo de sangre Icono Maestría: Escudo
              de sangre, tu Maestría, lo que a su vez se traduce en más daño
              absorbido y una ingesta de daño más suave. El índice de parada y
              el índice de esquiva te permiten esquivar. Sin embargo, tu
              probabilidad de esquivar será unas dos veces mayor que la de
              esquivar porque la Fuerza también aumenta tu probabilidad de
              esquivar.
            </p>
            <p className=" text-center">
              Esquivar y Parar tienen diferentes curvas de rendimiento
              decreciente para compensar esto (algo que no ocurría en
              Cataclysm). Para hacer un uso más eficiente de los valores de
              Esquivar y Parar, lo mejor es tener la misma cantidad de valores,
              lo que equilibrará los rendimientos decrecientes. Sin embargo,
              dado que te estás centrando en la Maestría antes que en cualquier
              otra cosa, este aspecto no es muy importante e incluso se puede
              ignorar con seguridad. Para ver la relación exacta entre tus
              posibilidades de esquivar y parar, según tus estadísticas
              actuales, puedes usar una de las dos macros siguientes
              (dependiendo de si tienes o no la runa de forja Icono de runa de
              forja).
            </p>
            <p className=" text-center mb-10">
              El índice de acierto y el índice de pericia harán que más ataques
              caigan, mejorando así tu DPS/amenaza y ahorrándote enfriamientos
              globales. Para ambas estadísticas, debes apuntar al 7,5% máximo.
              La mayoría de los encuentros tienen habilidades que no se pueden
              mitigar ni evitar. Además, necesitas tener una cantidad decente de
              salud para tener la oportunidad de curarte antes de que un ataque
              posterior te mate. Por lo tanto, necesitas una cantidad mínima de
              Stamina. Esta cantidad, en la mayoría de los casos, vendrá
              simplemente de la Resistencia que se encuentra de forma innata en
              tu equipo. Por lo tanto, nunca tendrás que salirte de tu camino
              para conseguir gemas de Aguante.
            </p>
          </article>
        </article>
      </div>
    </>
  );
}
