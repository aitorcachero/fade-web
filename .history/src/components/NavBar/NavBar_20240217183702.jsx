import logo from '../../assets/fade1.png';

export default function NavBar() {
  return (
    <div className="flex flex-row justify-center items-center text-slate-300 h-20 bg-slate-900 ">
      <ul className="flex flex-row gap-5">
        <li>Inicio</li>
        <li>Clases</li>

        <img src={logo} width={100} />

        <li>Guías</li>
        <li>Progreso</li>
      </ul>
    </div>
  );
}
