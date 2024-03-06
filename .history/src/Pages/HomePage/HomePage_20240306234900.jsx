import LastKills from '../../components/LastKills/LastKills';
import DiscordImg from '../../assets/discord.png';

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
        <a href="https://discord.gg/GCrUkXe5N4">
          <button className="flex flex-row border justify-center items-center gap-6 px-20 rounded-xl bg-blue-700 text-xl mt-96 r-0 ml-96 hover:bg-green-700">
            <img src={DiscordImg} width={100} />
            Unete
          </button>
        </a>
      </article>
      <aside className="justify-center items-center  w-[500px] m-10">
        <h2></h2>
        <LastKills />
      </aside>
    </>
  );
}
