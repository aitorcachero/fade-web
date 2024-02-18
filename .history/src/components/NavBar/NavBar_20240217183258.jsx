import React from 'react';

export default function NavBar() {
  return (
    <div className="flex flex-row justify-center items-center text-slate-300 h-20 bg-slate-900 ">
      <ul className="flex flex-row">
        <li>Inicio</li>
        <li>Clases</li>
        <li>Guías</li>
      </ul>
    </div>
  );
}
