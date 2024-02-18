import { ENUM_CLASS } from '../../helpers/const';

export default function Classes() {
  return (
    <div>
      <aside className="w-96 h-screen bg-slate-950 p-10">
        <ul className="flex flex-col gap-3">
          {ENUM_CLASS.map((clase, i) => {
            return (
              <li
                key={i}
                className="w-full h-16 hover:bg-slate-600 flex flex-col justify-center items-center"
              >
                <p style={{ color: clase.color }} className="text-lg">
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
