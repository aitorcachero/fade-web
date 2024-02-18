export default function RaidProgress({ raid }) {
  return (
    <article className="w-96 flex flex-col justify-center ">
      <img src={raid.img} />
      <main className="bg-blue-950 flex flex-col gap-5">
        <h2>{raid.name}</h2>
        {raid.modalidad.map((mod, i) => {
          return (
            <div key={i} className="flex flex-row justify-between">
              <p>{mod?.type}</p>
              <div className="w-64 border flex justify-center item">
                {/* <p>
                  {mod?.defeated.reduce((v, a) => v + a, 0)}/
                  {mod.defeated.length}
                </p> */}
                <progress
                  max={mod.defeated.length}
                  value={mod?.defeated.reduce((v, a) => v + a, 0)}
                  className="w-full h-full relative"
                >
                  {/* <p>
                    {mod?.defeated.reduce((v, a) => v + a, 0)}/
                    {mod.defeated.length}
                  </p> */}
                </progress>
                <p className="z-30 absolute text-slate-950">7/7</p>
              </div>
            </div>
          );
        })}
      </main>
    </article>
  );
}
