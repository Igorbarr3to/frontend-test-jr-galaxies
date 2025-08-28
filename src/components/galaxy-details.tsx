import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import type { Galaxy } from "../types";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

interface GalaxyDetailsProps {
  galaxy: Galaxy | null;
  onGoBack: () => void;
}

const GalaxyDetails = ({ galaxy, onGoBack }: GalaxyDetailsProps) => {
  if (!galaxy) {
    return (
      <Card
        variant="outlined"
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          p: 3,
        }}
      >
        <Box>
          <InfoOutlinedIcon
            sx={{ fontSize: 48, color: "text.secondary", mb: 2 }}
          />
          <Typography variant="h6" color="text.secondary">
            Selecione uma galáxia na lista para ver seus detalhes
          </Typography>
        </Box>
      </Card>
    );
  }

  return (
    <Card
      variant="elevation"
      sx={{
        maxHeight: "60vh",
        overflow: "auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#121212",
        color: "white",
      }}
    >
      <Button
        startIcon={<ArrowBack />}
        onClick={onGoBack}
        sx={{
          display: { xs: "inline-flex", md: "none" },
        }}
        style={{ background: "#1976d2", color: "white", margin: 10 }}
      >
        Voltar
      </Button>

      <CardMedia
        component="img"
        height="300"
        style={{ objectFit: "cover" }}
        image={galaxy.image_url}
        alt={`Imagem da galáxia ${galaxy.name}`}
      />

      <CardContent style={{ color: "white" }}>
        <Typography gutterBottom variant="h4" component="div">
          {galaxy.name}
        </Typography>

        <Box sx={{ display: "flex", gap: 1, my: 2 }}>
          <Chip label={galaxy.type} color="primary" />
          <Chip label={galaxy.distance} variant="outlined" color="info" />
        </Box>

        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Estrelas:</strong> {galaxy.stars_count_estimate}
        </Typography>

        <Typography variant="body1" textAlign="justify" component="div">
          {galaxy.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GalaxyDetails;
