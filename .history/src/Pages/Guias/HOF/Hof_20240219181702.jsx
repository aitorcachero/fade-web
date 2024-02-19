import YouTube from 'react-youtube';

export default function Hof() {
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
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="OTnYq8OIGHk" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="a2GaKmmU-yU" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="bwqTYNPW7VA" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="jHxU4L3p_w8" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="S7oYyIZvKiI" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="kH4mJwEc-BU" opts={videoOptions} />
      </div>
    </div>
  );
}
