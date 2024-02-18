import { ENUM_CLASS } from '../../helpers/const';

export default function Classes() {
  return (
    <div>
      <aside className="w-96 h-screen bg-slate-950 flex justify-center items-center fixed">
        <ul className="flex flex-col justify-between items-center w-full">
          {ENUM_CLASS.map((clase, i) => {
            return (
              <li
                key={i}
                className="w-full h-16 hover:bg-zinc-800 flex flex-col justify-center items-center cursor-pointer"
              >
                <p style={{ color: clase.color }} className="text-xl">
                  {clase.class}
                </p>
              </li>
            );
          })}
        </ul>
      </aside>
      <main></main>
    </div>
  );
}
