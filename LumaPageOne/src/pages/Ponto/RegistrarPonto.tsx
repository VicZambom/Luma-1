import { Box, Card, Typography, Button, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { UserCardInfo } from "../../components/UserInfo";
// Importe a biblioteca de mapa ou a imagem do mapa

export function RegistrarPonto() {
  return (
    <Box sx={{ padding: 3 }}>
      {" "}
      {/* Container Principal */}
      <Card sx={{ position: "relative", padding: 3 }}>
        {" "}
        {/* Card Principal */}
        <IconButton sx={{ position: "absolute", top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Registrar ponto
        </Typography>
        <Box></Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          {" "}
          {/* Conteúdo Principal */}
          <Box>
            {" "}
            {/* Marcações de Hoje */}
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              MARCAÇÕES DE HOJE
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Typography>Quarta-feira</Typography>
              <Typography ml={2} fontWeight="bold">
                09:10:12
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: "50%",
                  width: 80,
                  height: 80,
                  fontSize: "0.9rem",
                }}
              >
                Bater ponto
              </Button>
              <Typography variant="caption" color="textSecondary">
                Clique duas vezes
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: 300, height: 200, border: "1px solid #ccc" }}>
            {/* Renderizar o Mapa aqui (ou imagem do mapa) */}
            Mapa
          </Box>
        </Box>
        <Box>
          {" "}
          {/* Escala de Hoje */}
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            ESCALA DE HOJE
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography mr={2}>Horário Esperado</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                borderBottom: "1px solid #ccc",
                paddingBottom: 1,
              }}
            >
              <Typography>08:00</Typography>
              {/* Ícone Garfo/Faca */}
              <Typography>12:00</Typography>
              {/* Ícone Garfo/Faca */}
              <Typography>13:00</Typography>
              {/* Ícone Garfo/Faca */}
              <Typography>18:00</Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
