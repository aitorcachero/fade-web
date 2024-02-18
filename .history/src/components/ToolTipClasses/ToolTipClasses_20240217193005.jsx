export default function ToolTipClasses({ data }) {
  return (
    <div className="w-96">
      <ul>
        {data.map((x, i) => {
          return <li key={i}>{x.class}</li>;
        })}
      </ul>
    </div>
  );
}
