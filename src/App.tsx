import { useEffect, useMemo, useState } from "react";
import "./App.css";
import type { Galaxy } from "./types";
import GalaxyList from "./components/galaxy-list";
import SearchBar from "./components/search-bar";
import GalaxyDetails from "./components/galaxy-details";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

function App() {
  const [allGalaxies, setAllGalaxies] = useState<Galaxy[]>([]);
  const [searchGalaxyByName, setSearchGalaxyByName] = useState("");
  const [selectedGalaxy, setSelectedGalaxy] = useState<Galaxy | null>(null);

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
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Galaxies Challenge
      </Typography>

      <Box
        sx={{ display: { xs: selectedGalaxy ? "none" : "block", md: "block" } }}
      >
        <SearchBar
          value={searchGalaxyByName}
          onChange={(e) => setSearchGalaxyByName(e.target.value)}
        />
      </Box>

      <Grid container spacing={2}>
        <Grid
          component="section"
          size={{ xs: 12, md: 4 }}
          sx={{
            display: { xs: selectedGalaxy ? "none" : "block", md: "block" },
          }}
        >
          <GalaxyList
            galaxies={filteredGalaxies}
            selectedGalaxy={selectedGalaxy}
            onSelectGalaxy={setSelectedGalaxy}
          />
        </Grid>

        <Grid
          component="section"
          size={{ xs: 12, md: 8 }}
          sx={{
            display: { xs: selectedGalaxy ? "block" : "none", md: "block" },
          }}
        >
          <GalaxyDetails
            galaxy={selectedGalaxy}
            onGoBack={() => setSelectedGalaxy(null)}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
