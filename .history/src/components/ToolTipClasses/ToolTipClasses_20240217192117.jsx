import React from 'react';

export default function ToolTip({ data }) {
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
