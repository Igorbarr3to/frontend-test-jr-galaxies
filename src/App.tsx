import { useEffect, useMemo, useState } from "react";
import "./App.css";
import type { Galaxy } from "./types";
import GalaxyList from "./components/galaxy-list";
import SearchBar from "./components/search-bar";

function App() {
  const [allGalaxies, setAllGalaxies] = useState<Galaxy[]>([]);
  const [searchGalaxyByName, setSearchGalaxyByName] = useState("");

   useEffect(() => {
    const fetchGalaxies = async () => {
      const res = await fetch("/galaxies.json");
      const data = await res.json();
      setAllGalaxies(data);
    };
    fetchGalaxies();
  }, []);

  const filteredGalaxies = useMemo(() => {
    if (!searchGalaxyByName) return allGalaxies;

    return allGalaxies.filter((galaxy) =>
      galaxy.name.toLowerCase().includes(searchGalaxyByName.toLowerCase())
    );
  }, [searchGalaxyByName, allGalaxies]);

  return (
    <>
      <h1>Hello, Galaxies</h1>
      <SearchBar
        value={searchGalaxyByName}
        onChange={(e) => setSearchGalaxyByName(e.target.value)}
      />
      <GalaxyList galaxies={filteredGalaxies} />
    </>
  );
}

export default App;
