export default function RaidProgress({ raid }) {
  return (
    <article className="w-96 h-2/">
      <img src={raid.img} />
      <h2>{raid.name}</h2>
    </article>
  );
}
