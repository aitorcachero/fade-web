export default function ToolTipClasses({ data }) {
  return (
    <div className="w-64 bg-slate-900 mt-3">
      <ul className="flex flex-col justify-center gap-3">
        {data.map((x, i) => {
          return (
            <li key={i} className="">
              {x.class}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
