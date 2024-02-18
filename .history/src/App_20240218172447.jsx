import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import RaidProgress from './Pages/RaidProgress/RaidProgress.jsx';

import NavBar from './components/NavBar/NavBar.jsx';

import Classes from './Pages/Classes/Classes.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/class" element={<Classes />} />
        <Route path="/progress" element={<RaidProgress />} />
      </Routes>
    </>
  );
}

export default App;
