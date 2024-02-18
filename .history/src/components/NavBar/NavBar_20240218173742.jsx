import { useState } from 'react';
import logo from '../../assets/fade1.png';
import { ENUM_CLASS } from '../../helpers/const';
import ToolTipClasses from '../ToolTipClasses/ToolTipClasses';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [classes, setClasses] = useState(false);
  return (
    <div className="flex flex-row justify-center items-center text-slate-300 h-20 bg-slate-900 fixed w-screen top-0 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
      <ul className="flex flex-row justify-center items-center gap-20">
        <Link to="/">
          <li className="cursor-pointer">Inicio</li>
        </Link>
        <Link to="/class">
          <li className="cursor-pointer">Clases</li>
        </Link>

        <img src={logo} width={100} />

        <li className="cursor-pointer">Guías</li>
        <Link to="/progress">
          <li className="cursor-pointer">Progreso</li>
        </Link>
      </ul>
    </div>
  );
}
