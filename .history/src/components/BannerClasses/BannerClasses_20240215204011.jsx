import { NavLink } from 'react-router-dom';
import { ENUM_CLASS } from '../../helpers/const.js';
import { useState } from 'react';

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
      {spec && spec === 'dkfrost' && <DkFrost />}
      {spec && spec === 'dkunholy' && <DkProfano />}
      {spec && spec === 'dkblood' && <DkSangre />}
      {spec && spec === 'affliction' && <Afflicion />}
      {spec && spec === 'demonology' && <Demonologia />}
      {spec && spec === 'destruction' && <Destruccion />}
      {spec && spec === 'doodelemental' && <DruidaElemental />}
      {spec && spec === 'doodferal' && <DruidaFeral />}
      {spec && spec === 'doodtank' && <DruidTank />}
      {spec && spec === 'doodheal' && <DruidaHeal />}
      {spec && spec === 'hunterbeast' && <HunterBeast />}
      {spec && spec === 'hunterpunteria' && <HunterMM />}
      {spec && spec === 'huntersurvival' && <HunterSurvival />}
      {spec && spec === 'magearcane' && <MageArcane />}
      {spec && spec === 'magefrost' && <MageFrost />}
      {spec && spec === 'magefire' && <MageFire />}
      {spec && spec === 'monktank' && <MonkTank />}
      {spec && spec === 'monkdps' && <MonkDps />}
      {spec && spec === 'monkheal' && <MonkHeal />}
    </>
  );
}
