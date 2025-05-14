import { Button, Stack } from "@mui/material";

export function PontoHome() {
  return (
    <Stack
      direction="row"
      spacing={2}
      flexDirection="column"
      width="23rem"
      border="2px solid"
      p="20px"
      m="20px"
      color="blue"
    >
      <Button variant="contained" href="/RegistrarPonto">
        Bater Ponto
      </Button>
    </Stack>
  );
}
