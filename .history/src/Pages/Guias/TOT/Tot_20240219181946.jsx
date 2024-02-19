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
    <div className="flex flex-col w-full gap-10 mb-10 mt-14 justify-center items-center bg-slate-800">
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="T31oJlQ6Po8" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="_BvYqEWJtt0" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="jnrgdrKI4Ng" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="QCB5bmj-YAY" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="A-zDTnnleVw" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="ZAIY8ViIIfY" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="a_NY2fIW_6Y" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="-TmhIhKcSxA" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="l3aJyw-XlEo" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="DQFJQZacntw" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="g_Fp0bqudiA" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="ocuEMw7Ll78" opts={videoOptions} />
      </div>
    </div>
  );
}
