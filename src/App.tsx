import { useEffect, useState } from 'react';
import './App.css'
import type { Galaxy } from './types';
import GalaxyList from './components/galaxy-list';

function App() {
  const [allGalaxies, setAllGalaxies]  = useState<Galaxy[]>([]);

  const fetchGalaxies = async ()=>{
    const res = await fetch('/galaxies.json');
    const data = await res.json();
    setAllGalaxies(data);
  };

  useEffect(()=>{
    fetchGalaxies();
  },[])

  return (
    <>
     <h1>Hello, Galaxies</h1>
     <GalaxyList galaxies={allGalaxies} />
    </>
  )
}

export default App
