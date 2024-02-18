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
              className="flex flex-row justify-between h-7 w-full text-center"
            >
              <p>{mod?.type}</p>
              <div className="w-64 h-full border flex justify-center item">
                {/* <p>
                  {mod?.defeated.reduce((v, a) => v + a, 0)}/
                  {mod.defeated.length}
                </p> */}
                {/* <progress
                  max={mod.defeated.length}
                  value={mod?.defeated.reduce((v, a) => v + a, 0)}
                  className="w-full h-full relative bg-black"
                ></progress>
                <p className="absolute">
                  {mod?.defeated.reduce((v, a) => v + a, 0)}/
                  {mod.defeated.length}
                </p> */}
                <div className="w-full h-full bg-gray-200   dark:bg-gray-700 ">
                  <p className="text-center">7/7</p>
                  <div
                    className="bg-blue-600 h-full "
                    style={{ width: '45%' }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </article>
  );
}
