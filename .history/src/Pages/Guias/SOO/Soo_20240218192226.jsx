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
      <YouTube videoId="nUz0qkMIW_Y" opts={videoOptions} />
      <YouTube videoId="JD3qzZgjGWA" opts={videoOptions} />
      <YouTube videoId="MAZTnRHzvCA" opts={videoOptions} />
      <YouTube videoId="VWJkss8SJ9Q" opts={videoOptions} />
      <YouTube videoId="gNUWolr1kCc" opts={videoOptions} />
      <YouTube videoId="blXQTReKMLE" opts={videoOptions} />
      <YouTube videoId="uQmOoDvWDbY" opts={videoOptions} />
      <YouTube videoId="zYb_b9kyUtg" opts={videoOptions} />
      <YouTube videoId="B3wDR7B9rfI" opts={videoOptions} />
      <YouTube videoId="9W6tiUCtXYQ" opts={videoOptions} />
      <YouTube videoId="2jQzA4gBjZ8" opts={videoOptions} />
      <YouTube videoId="jOAfRfZ_py4" opts={videoOptions} />

      <YouTube videoId="JVNxASoDA2k" opts={videoOptions} />
      <YouTube videoId="PGsN5l26n3A" opts={videoOptions} />
    </div>
  );
}

https://youtu.be/
