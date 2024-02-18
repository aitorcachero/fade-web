export default function ToolTipClasses({ data }) {
  return (
    <div className="w-96 bg-slate-900 mt-3">
      <ul className="flex flex-col gap-3">
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
