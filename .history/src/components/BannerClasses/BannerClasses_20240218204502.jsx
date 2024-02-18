import { NavLink } from 'react-router-dom';
import { ENUM_CLASS } from '../../helpers/const.js';
import { useState } from 'react';
import DkFrost from '../../Pages/Classes/Dk/DkFrost.jsx';
import DkProfano from '../../Pages/Classes/Dk/DkProfano.jsx';
import DkSangre from '../../Pages/Classes/Dk/DkSangre.jsx';
import Afflicion from '../../Pages/Classes/Brujo/Afflicion.jsx';
import Demonologia from '../../Pages/Classes/Brujo/Demonologia.jsx';
import Destruccion from '../../Pages/Classes/Brujo/Destruccion.jsx';
import DruidaElemental from '../../Pages/Classes/Druida/DruidaElemental.jsx';
import DruidaFeral from '../../Pages/Classes/Druida/DruidaFeral.jsx';
import DruidTank from '../../Pages/Classes/Druida/DruidTank.jsx';
import DruidaHeal from '../../Pages/Classes/Druida/DruidaHeal.jsx';
import HunterBeast from '../../Pages/Classes/Cazador/HunterBeast.jsx';
import HunterMM from '../../Pages/Classes/Cazador/HunterMM.jsx';
import HunterSurvival from '../../Pages/Classes/Cazador/HunterSurvival.jsx';
import MageArcane from '../../Pages/Classes/Mago/MageArcane.jsx';
import MageFrost from '../../Pages/Classes/Mago/MageFrost.jsx';
import MageFire from '../../Pages/Classes/Mago/MageFire.jsx';
import MonkTank from '../../Pages/Classes/Monje/MonkTank.jsx';
import MonkDps from '../../Pages/Classes/Monje/MonkDps.jsx';
import MonkHeal from '../../Pages/Classes/Monje/MonkHeal.jsx';

export default function BannerClasses() {
  const [personaje, setPersonaje] = useState();
  const [priority, setPriority] = useState();
  const [spec, setSpec] = useState();

  const handleClick = (clase) => {
    setSpec(false);
    setPersonaje(clase.id);
  };

  return (
    <>
      <div className="w-full h-3 flex flex-row justify-center items-center gap-2 mt-10 mb-20">
        {ENUM_CLASS.map((clase) => {
          return (
            <button
              key={clase.id}
              className="text-black w-40 h-20 cursor-pointer hover:scale-105 transition-all hover:border-x-stone-900"
              style={{ backgroundColor: clase.color }}
              onClick={() => handleClick(clase)}
            >
              <p className="">{clase.class}</p>
            </button>
          );
        })}
      </div>
      {personaje && (
        <div className="w-full h-3 flex flex-row justify-center items-center gap-2 mt-24 mb-16">
          {console.log(ENUM_CLASS.find((x) => x.id === personaje).specs)}
          {ENUM_CLASS.find((x) => x.id === personaje).specs.map((clase, i) => {
            return (
              <button
                className="inline-flex h-16 w-52 animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors "
                key={i}
                onClick={() => {
                  setSpec(clase.priority);
                  console.log(clase.priority);
                }}
              >
                {clase.nombre}
              </button>
            );
          })}
        </div>
      )}

      {spec && spec === 'magearcane' && <MageArcane />}
      {spec && spec === 'magefrost' && <MageFrost />}
      {spec && spec === 'magefire' && <MageFire />}
      {spec && spec === 'monktank' && <MonkTank />}
      {spec && spec === 'monkdps' && <MonkDps />}
      {spec && spec === 'monkheal' && <MonkHeal />}
    </>
  );
}
