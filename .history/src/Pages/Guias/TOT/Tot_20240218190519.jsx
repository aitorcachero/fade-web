import YouTube from 'react-youtube';

export default function Tot() {
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
    <div className="flex flex-col w-full gap-10 mb-10 mt-20 justify-center items-center bg-slate-800">
      <YouTube videoId="T31oJlQ6Po8" opts={videoOptions} />
      <YouTube videoId="_BvYqEWJtt0" opts={videoOptions} />
      <YouTube videoId="jnrgdrKI4Ng" opts={videoOptions} />
      <YouTube videoId="QCB5bmj-YAY" opts={videoOptions} />
      <YouTube videoId="A-zDTnnleVw" opts={videoOptions} />
      <YouTube videoId="ZAIY8ViIIfY" opts={videoOptions} />
      <YouTube videoId="a_NY2fIW_6Y" opts={videoOptions} />
      <YouTube videoId="-TmhIhKcSxA" opts={videoOptions} />
      <YouTube videoId="l3aJyw-XlEo" opts={videoOptions} />
      <YouTube videoId="DQFJQZacntw" opts={videoOptions} />
      <YouTube videoId="g_Fp0bqudiA" opts={videoOptions} />
      <YouTube videoId="ocuEMw7Ll78" opts={videoOptions} />
    </div>
  );
}
