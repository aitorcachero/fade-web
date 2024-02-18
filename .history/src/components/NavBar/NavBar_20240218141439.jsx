import { useState } from 'react';
import logo from '../../assets/fade1.png';
import { ENUM_CLASS } from '../../helpers/const';
import ToolTipClasses from '../ToolTipClasses/ToolTipClasses';

export default function NavBar() {
  const [classes, setClasses] = useState(false);
  return (
    <div className="flex flex-row justify-center items-center text-slate-300 h-20 bg-slate-900 fixed w-screen top-0">
      <ul className="flex flex-row justify-center items-center gap-20">
        <li className="cursor-pointer">Inicio</li>

        <li className="cursor-pointer">Clases</li>

        <img src={logo} width={100} />

        <li className="cursor-pointer">Guías</li>
        <li className="cursor-pointer">Progreso</li>
      </ul>
    </div>
  );
}
