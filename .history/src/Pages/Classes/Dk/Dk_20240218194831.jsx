import dkImg from '../../../assets/clases/dk.png';

export default function Dk() {
  return (
    <div className="relative w-full  flex justify-center items-center  p-20">
      <article className="border border-orange-500 rounded-lg w-full relative p-10 flex flex-row justify-between items-center shadow-md shadow-orange-800 h-24">
        <h1>
          Los caballeros de la Muerte se enfrentan a sus enemigos de cerca,
          asestando golpes con sus armas con magia oscura que vuelve a los
          enemigos vulnerables o les inflige daño con poder oscuro. Arrastran a
          los enemigos a enfrentamientos uno contra uno, obligándoles a
          concentrar sus ataques lejos de sus compañeros más débiles. Para
          evitar que sus enemigos escapen de sus garras, los caballeros de la
          Muerte deben ser conscientes del poder que invocan de las runas y
          controlar sus ataques de forma apropiada.
        </h1>
        <img src={dkImg} className="" />
      </article>
    </div>
  );
}
