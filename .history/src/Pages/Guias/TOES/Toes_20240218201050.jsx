import YouTube from 'react-youtube';
export default function Toes() {
  const videoOptions = {
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 0,
      mute: 0,
      loop: 1,
    },
  };

  return (
    <div className="flex flex-col w-full gap-10 mb-10 mt-14 justify-center items-center bg-slate-800">
      <YouTube videoId="PrVL_LJLZbo" opts={videoOptions} />
      <YouTube videoId="N6KEQS54n38" opts={videoOptions} />
      <YouTube videoId="Ap4pVKxSNOE" opts={videoOptions} />
      <YouTube videoId="yJ8d0cWfs48" opts={videoOptions} />
    </div>
  );
}
