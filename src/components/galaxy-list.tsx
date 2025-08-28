import type { Galaxy } from "../types";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper"; 
import { useState } from "react";
import { StarBorder } from "@mui/icons-material";

interface GalaxyListProps {
  galaxies: Galaxy[];
}

const GalaxyList = ({ galaxies }: GalaxyListProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
  
    <Paper variant="outlined" sx={{ maxHeight: "70vh", overflow: "auto" }}>
      <List component="nav" aria-label="lista de galáxias">
        {galaxies.map((galaxy, index) => (
          <div key={galaxy.id}>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
            >
       
              <ListItemText
                primary={galaxy.name}
                secondary={
                  <Box
                    component="span"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <StarBorder
                      sx={{
                        fontSize: "1rem",
                        mr: 0.5,
                        color: "text.secondary",
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
