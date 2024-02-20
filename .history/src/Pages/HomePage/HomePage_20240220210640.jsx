import pandariaIMG from '../../assets/pandaria.webp';
import Loader from '../../components/Loader/Loader';

export default function HomePage() {
  return (
    <>
      <article className="p-10 mt-24 absolute right-0 top-0">
        <h1 className="text-7xl mb-5 text-black">
          Bienvenidos a <span className="text-7xl text-orange-500">FADE</span>
        </h1>
        <p className="text-black font-semibold">
          Guild Alianza en Stormforge donde se promueve un odio insano hacia
          Proa
        </p>
      </article>
    </>
  );
}