import React from 'react';
import YouTube from 'react-youtube';

export default function Msv() {
  return (
    <div className="flex flex-col">
      <YouTube videoId="Dnx9lhZsI6g" opts={videoOptions} />
    </div>
  );
}
