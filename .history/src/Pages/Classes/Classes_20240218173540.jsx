import { ENUM_CLASS } from '../../helpers/const';

export default function Classes() {
  return (
    <div>
      <aside className="w-96 h-screen bg-slate-950 pt-10 fixed">
        <ul className="flex flex-col gap-3">
          {ENUM_CLASS.map((clase, i) => {
            return (
              <li
                key={i}
                className="w-full h-14 hover:bg-slate-800 flex flex-col justify-center items-center cursor-pointer"
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
