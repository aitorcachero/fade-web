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
    <div className="flex flex-col gap-10">
      <YouTube videoId="OTnYq8OIGHk" opts={videoOptions} />
      <YouTube videoId="a2GaKmmU-yU" opts={videoOptions} />
      <YouTube videoId="bwqTYNPW7VA" opts={videoOptions} />
      <YouTube videoId="jHxU4L3p_w8" opts={videoOptions} />
      <YouTube videoId="S7oYyIZvKiI" opts={videoOptions} />
      <YouTube videoId="kH4mJwEc-BU" opts={videoOptions} />
    </div>
  );
}
