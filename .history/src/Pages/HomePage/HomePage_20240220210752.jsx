import pandariaIMG from '../../assets/pandaria.webp';
import Loader from '../../components/Loader/Loader';

export default function HomePage() {
  return (
    <>
      <article className="p-10 mt-24 absolute right-0 top-0">
        <h1 className="text-7xl mb-5 text-black">
          Bienvenidos a <span className="text-7xl text-orange-6500">FADE</span>
        </h1>
        <p className="text-black font-semibold text-xl">
          Guild Alianza en Stormforge
        </p>
      </article>
    </>
  );
}
