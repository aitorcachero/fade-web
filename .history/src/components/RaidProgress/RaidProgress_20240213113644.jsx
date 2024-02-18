export default function RaidProgress({ raid }) {
  return (
    <article className="w-96 flex flex-col justify-center border border-indigo-800">
      <img src={raid.img} className="h-36" />
      <main className="bg-blue-950 flex flex-col gap-10 p-5 h-64 justify-center">
        <h2>{raid.name}</h2>
        {raid.modalidad.map((mod, i) => {
          return (
            <div
              key={i}
              className="flex flex-row justify-between h-7 w-full items-center"
            >
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
                ></progress>
                <p className="absolute">
                  {mod?.defeated.reduce((v, a) => v + a, 0)}/
                  {mod.defeated.length}
                </p>
              </div>
            </div>
          );
        })}
      </main>
    </article>
  );
}
