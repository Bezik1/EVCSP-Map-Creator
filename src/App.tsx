import { Routes, Route } from 'react-router-dom';

import './App.css'
import DistancesMap from './pages/DistancesMap';
import Navbar from './components/Navbar';

export default  function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<DistancesMap />} />
      </Routes>
    </main>
  )
}