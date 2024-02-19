import YouTube from 'react-youtube';

export default function Soo() {
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
        <YouTube videoId="nUz0qkMIW_Y" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="JD3qzZgjGWA" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="MAZTnRHzvCA" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="VWJkss8SJ9Q" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="gNUWolr1kCc" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="blXQTReKMLE" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="uQmOoDvWDbY" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="zYb_b9kyUtg" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="B3wDR7B9rfI" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="9W6tiUCtXYQ" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="2jQzA4gBjZ8" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="jOAfRfZ_py4" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="JVNxASoDA2k" opts={videoOptions} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <YouTube videoId="PGsN5l26n3A" opts={videoOptions} />
      </div>
    </div>
  );
}
