export default function RaidProgress({ raid }) {
  return (
    <article>
      <img src={raid.img} />
      <h2>{raid.name}</h2>
    </article>
  );
}
