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
    <div className="flex flex-col gap-10 mb-10">
      <YouTube videoId="OTnYq8OIGHk" opts={videoOptions} />
      <YouTube videoId="N6KEQS54n38" opts={videoOptions} />
      <YouTube videoId="bwqTYNPW7VA" opts={videoOptions} />
      <YouTube videoId="jHxU4L3p_w8" opts={videoOptions} />
    </div>
  );
}
