export default function RaidProgress({ raid }) {
  return (
    <article className="w-96 flex flex-col justify-center gap-5">
      <img src={raid.img} />
      <h2>{raid.name}</h2>
      {raid.modalidad.map((mod, i) => {
        return (
          <div key={i} className="flex flex-row justify-between">
            <p>{mod?.type}</p>
            <div className="w-64 border flex justify-center item">
              <p>
                {mod?.defeated.reduce((v, a) => v + a, 0)}/{mod.defeated.length}
              </p>
            </div>
          </div>
        );
      })}
    </article>
  );
}
