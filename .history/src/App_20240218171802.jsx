import { useState } from 'react';
import BannerClasses from './components/BannerClasses/BannerClasses';

import { Route, Routes } from 'react-router-dom';
import RaidProgress from './components/RaidProgress/RaidProgress';
import { raidProgress } from './helpers/progress.js';
import Msv from './Pages/Guias/MSV/Msv.jsx';
import Hof from './Pages/Guias/HOF/Hof.jsx';
import Toes from './Pages/Guias/TOES/Toes.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import NavBarAlt from './components/NavBarAlt/NavBarAlt.jsx';
import Classes from './Pages/Classes/Classes.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      {/* {<NavBarAlt />} */}
      {/* <div className="inset-0 sticky w-screen min-h-screen  items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"> */}

      {/* <BannerClasses /> */}
      <RaidProgress />
      {/* <Msv /> */}
      {/* <Hof /> */}
      {/* <Toes /> */}
      {/* <div className="w-full p-14 flex flex-col lg:flex-row gap-10">
        {raidProgress.map((raid, i) => {
          return <RaidProgress key={i} raid={raid} />;
        })}
      </div> */}
      <Routes>
        <Route to="/" element={<HomePage />} />
        <Route to="/class" element={<Classes />} />
      </Routes>
    </>
  );
}

export default App;
