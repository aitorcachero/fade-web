import bgRaidProgress from '../../assets/bgRaidProgress.jpeg';

export default function RaidProgress({ raid }) {
  const calcWidth = (length, defeated) => {
    return (100 * defeated) / length;
  };

  return (
    <article
      className="w-80 flex flex-col justify-center border"
      style={{
        backgroundImage: `url(${bgRaidProgress})`,
        backgroundSize: 'contain',
        border: '1px solid #3f4f56',
      }}
    >
      <img src={raid.img} className="h-36" />
      <main className="flex flex-col gap-10 p-5 h-64 justify-center">
        <h2 className="text-xl">{raid.name}</h2>
        {raid.modalidad.map((mod, i) => {
          return (
            <div
              key={i}
              className="flex flex-row justify-between h-7 w-full text-center items-center"
            >
              <p className="text-xs text-orange-500">{mod?.type}</p>
              <div className="w-52 h-full border flex justify-center item">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 relative ">
                  <div
                    className="bg-green-500 h-full "
                    style={{
                      width: `${calcWidth(
                        mod.defeated.length,
                        mod?.defeated.reduce((v, a) => v + a, 0)
                      )}%`,
                    }}
                  ></div>
                  <p className="text-center absolute top-0">
                    {mod?.defeated.reduce((v, a) => v + a, 0)}/
                    {mod.defeated.length}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </article>
  );
}
