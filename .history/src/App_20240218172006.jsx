import { useState } from 'react';
import BannerClasses from './components/BannerClasses/BannerClasses';

import { Route, Routes } from 'react-router-dom';
import RaidProgress from './Pages/RaidProgress/RaidProgress.jsx';
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

      <Routes>
        <Route to="/" element={<HomePage />} />
        <Route to="/class" element={<Classes />} />
        <Route to="/progress" element={<RaidProgress />} />
      </Routes>
    </>
  );
}

export default App;
