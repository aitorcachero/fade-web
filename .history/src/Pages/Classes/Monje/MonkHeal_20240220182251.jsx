export default function MonkHeal() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2  mb-10">
      <article className="border border-orange-500 rounded-lg  relative p-10 flex flex-row justify-between items-center shadow-md shadow-orange-800  mb-24 bg-slate-950">
        <span className="bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-xl text-transparent">
          {`Crítico > Celeridad (hasta alcanzar el cap) > Intelecto > Maestría > Espíritu (hasta estar cómodo con la regeneración de maná) > Celeridad`}
        </span>
        <p>CAPS DE CELERIDAD</p>
        <p>Primer cap: 3145 + 5% buff raid</p>
        <p>Segundo cap: 6141 +5% buff raid</p>
        <p>Tercer cap: 9158 +5% buff raid</p>
      </article>
    </div>
  );
}
