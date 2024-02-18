import dkImg from '../../../assets/clases/dk.png';

export default function Dk() {
  return (
    <div className="relative w-full  flex justify-center items-center">
      <article className="border border-orange-500 rounded w-2/5 relative p-10 flex flex-row">
        <img src={dkImg} />
        <h1>Caballero de la muerte</h1>
      </article>
    </div>
  );
}
