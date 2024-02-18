export default function RaidProgress({ raid }) {
  return (
    <article className="w-96">
      <img src={raid.img} />
      <h2>{raid.name}</h2>
      {raid.modalidad.map((mod, i) => {
        return (
          <div key={i} className="flex flex-row ">
            <p>{mod?.type}</p>
            <span className="">
              <p>
                {mod?.defeated.reduce((v, a) => v + a, 0)}/{mod.defeated.length}
              </p>
            </span>
          </div>
        );
      })}
    </article>
  );
}
