import dkImg from '../../../assets/clases/dk.png';

export default function Dk() {
  return (
    <div className="relative w-full  flex justify-center items-center mt-20">
      <article className="border border-orange-500 rounded w-2/5 relative p-10 flex flex-row justify-between items-center">
        <h1>Caballero de la muerte</h1>
        <img src={dkImg} />
      </article>
    </div>
  );
}
