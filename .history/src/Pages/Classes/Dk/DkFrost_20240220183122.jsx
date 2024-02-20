export default function DkFrost() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-2  mb-10">
        <article className="border border-orange-500 rounded-lg  relative p-10 flex  items-center shadow-md shadow-orange-800  mb-24 bg-slate-950  flex-col justify-center gap-2">
          <h2 className="text-2xl">Estadísticas para armas de 1 mano</h2>
          <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
            {`Fuerza > Pericia (hasta 7.5%) > Golpe (hasta 7.5%) > Maestria > Crítico > Celeridad > Golpe (hasta 26.5%) `}
          </span>

          <h2 className="text-2xl">Estadísticas para arma de 2 manos</h2>
          <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
            {`Fuerza > Pericia (hasta 7.5%) > Golpe (hasta 7.5%) > Crítico > Maestría > Celeridad`}
          </span>
        </article>
      </div>
    </>
  );
}
