import type { Galaxy } from "../types";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { Star } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

interface GalaxyListProps {
  galaxies: Galaxy[];
  selectedGalaxy: Galaxy | null;
  onSelectGalaxy: (galaxy: Galaxy) => void;
}

const GalaxyList = ({
  galaxies,
  selectedGalaxy,
  onSelectGalaxy,
}: GalaxyListProps) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        maxHeight: "70vh",
        overflow: "auto",
        backgroundColor: "#121212",
        color: "white",
      }}
    >
      <List component="nav" aria-label="lista de galáxias">
        {galaxies.map((galaxy) => (
          <div key={galaxy.id}>
            <ListItemButton
              selected={selectedGalaxy?.id === galaxy.id}
              onClick={() => onSelectGalaxy(galaxy)}
            >
              <ListItemText
                primary={galaxy.name}
                secondary={
                  <Box
                    component="span"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <Star
                      sx={{
                        fontSize: "1rem",
                        mr: 0.5,
                        color: yellow[700],
                      }}
                    />
                    {`${galaxy.stars_count_estimate} estrelas`}
                  </Box>
                }
              />
            </ListItemButton>
            <Divider />
          </div>
        ))}
      </List>
    </Paper>
  );
};

export default GalaxyList;
