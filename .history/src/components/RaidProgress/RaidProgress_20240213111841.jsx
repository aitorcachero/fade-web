export default function RaidProgress({ raid }) {
  return (
    <article className="w-96">
      <img src={raid.img} />
      <h2>{raid.name}</h2>
      {name.modalidad.map((mod, i) => {
        return (
          <div key={i} className="flex flex-row ">
            <p>{mod?.type}</p>
            <div className="">
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
