export default function ToolTipClasses({ data }) {
  return (
    <div className="w-64 bg-slate-900 mt-3 z-50">
      <ul className="flex flex-col justify-center items-center gap-3 py-3 z-50">
        {data.map((x, i) => {
          return (
            <li
              key={i}
              className="border-b-2 border-gray-500 h-10 w-full text-center z-50"
              style={{ color: x.color }}
            >
              {x.class}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
