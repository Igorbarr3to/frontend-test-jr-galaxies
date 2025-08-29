import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import type { Galaxy } from "../types";
import { Button, Container, Skeleton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useEffect, useState } from "react";

interface GalaxyDetailsProps {
  galaxy: Galaxy | null;
  onGoBack: () => void;
}

const GalaxyDetails = ({ galaxy, onGoBack }: GalaxyDetailsProps) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    if (galaxy) {
      setIsImageLoading(true);
    }
  }, [galaxy]);

  if (!galaxy) {
    return (
      <Card
        variant="elevation"
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ p: 20 }}>
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
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#121212",
        color: "white",
      }}
    >
      {isImageLoading && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            height: {
              xs: 200,
              sm: 250,
              md: 300,
            },
          }}
        />
      )}

      <CardMedia
        component="img"
        sx={{
          objectFit: "cover",
          display: isImageLoading ? "none" : "block",
          height: {
            xs: 200,
            sm: 250,
            md: 300,
          },
        }}
        image={galaxy.image_url}
        alt={`Imagem da galáxia ${galaxy.name}`}
        onLoad={() => setIsImageLoading(false)}
      />
      <Container
        sx={{ width: "100%", textAlign: { xs: "center", md: "left" } }}
      >
        <Button startIcon={<ArrowBack />} onClick={onGoBack}>
          Voltar
        </Button>
      </Container>

      <CardContent style={{ color: "white", width: "100%" }}>
        <Typography gutterBottom variant="h4" component="div">
          {galaxy.name}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 0.5, md: 1 },
            flexWrap: "wrap",
            my: 2,
          }}
        >
          <Chip label={galaxy.type} color="primary" />
          <Chip label={galaxy.distance} variant="outlined" color="info" />
          <Chip
            label={`Estrelas: ${galaxy.stars_count_estimate}`}
            variant="outlined"
            color="warning"
          />
        </Box>

        <Typography variant="body1" textAlign="justify" component="div">
          {galaxy.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GalaxyDetails;
