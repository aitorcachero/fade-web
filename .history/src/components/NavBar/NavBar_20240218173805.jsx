import { useState } from 'react';
import logo from '../../assets/fade1.png';
import { ENUM_CLASS } from '../../helpers/const';
import ToolTipClasses from '../ToolTipClasses/ToolTipClasses';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [classes, setClasses] = useState(false);
  return (
    <div className="flex flex-row justify-center items-center text-slate-300 h-20 bg-slate-900 fixed w-screen top-0 shadow-lg">
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
