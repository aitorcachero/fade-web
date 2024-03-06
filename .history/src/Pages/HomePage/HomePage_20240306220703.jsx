import LastKills from '../../components/LastKills/LastKills';

export default function HomePage() {
  return (
    <>
      <article className="p-10 mt-24 absolute right-0 top-0">
        <h1 className="text-7xl mb-5 text-black font-semibold">
          Bienvenidos a{' '}
          <span className="text-7xl text-orange-600 font-bold">FADE</span>
        </h1>
        <p className="text-gray-500 font-semibold text-xl">
          Guild Alianza en Stormforge
        </p>
        <button>Unete</button>
      </article>
      <aside className="justify-center items-center  w-[500px] m-10">
        <h2></h2>
        <LastKills />
      </aside>
    </>
  );
}
