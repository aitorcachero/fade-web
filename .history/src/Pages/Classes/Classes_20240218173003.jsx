import { ENUM_CLASS } from '../../helpers/const';

export default function Classes() {
  return (
    <div>
      <aside className="w-96 h-screen bg-slate-900 p-10">
        <ul>
          {ENUM_CLASS.map((clase, i) => {
            return (
              <li key={i}>
                <p style={{ color: clase.color }}>{clase.class}</p>
              </li>
            );
          })}
        </ul>
      </aside>
      <main></main>
    </div>
  );
}
