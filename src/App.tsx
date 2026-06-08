import { Routes, Route } from 'react-router-dom';
import './App.css'

import MapSettingsContainer from './components/MapSettingsContainer';
import CurrentMap from './pages/CurrentMap';

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<CurrentMap />} />
      </Routes>

      <section className='settings'>
        <MapSettingsContainer />
      </section>
    </main>
  );
}