import logo from '../../assets/fade1.png';

export default function NavBar() {
  return (
    <div className="flex flex-row justify-center items-center text-slate-300 h-20 bg-slate-900 fixed w-screen top-0">
      <ul className="flex flex-row justify-center items-center gap-20">
        <li className="cursor-pointer">Inicio</li>
        <div className="relative">
          <li className="cursor-pointer">Clases</li>
        </div>

        <img src={logo} width={100} />

        <li className="cursor-pointer">Guías</li>
        <li className="cursor-pointer">Progreso</li>
      </ul>
    </div>
  );
}
