import React from 'react';

export default function HomePage() {
  return (
    <div
            className="flex flex-col w-full justify-center items-center bg-slate-800 "
            style={{
              backgroundImage: `url(${pandariaIMG})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
            }}
      <article className="p-10 mt-96">
        <h1 className="text-7xl mb-5">
          Bienvenidos a <span className="text-7xl text-orange-500">FADE</span>
        </h1>
        <p>Guild Alianza en Stormforge</p>
      </article>
    </div>
  );
}



