import { useState } from 'react';
import BannerClasses from './components/BannerClasses/BannerClasses';

import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="inset-0 sticky w-screen min-h-screen  items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"> */}
      <div className="w-full flex justify-center items-center">
        <h1 className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-6xl text-transparent text-center mb-10">
          FADE
        </h1>
      </div>
      {/* <BannerClasses /> */}
      {/* </div> */}
    </>
  );
}

export default App;
