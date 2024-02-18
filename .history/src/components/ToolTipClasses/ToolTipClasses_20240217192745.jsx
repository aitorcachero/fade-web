export default function ToolTipClasses({ data }) {
  return (
    <div>
      <ul>
        {data.map((x, i) => {
          return <li key={i}>{x}</li>;
        })}
      </ul>
    </div>
  );
}
