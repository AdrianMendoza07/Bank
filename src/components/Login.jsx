import { Card, Stack, Typography, TextField, Container, Button } from "@mui/material";

export default function Login() {
  return (
    <>
      <Container sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Card sx={{ padding: 5, width: 300, textAlign: 'center',  }}>
          <Typography variant="h5" mb={3} >
            Entra a Banco BBVA
          </Typography>

          <Typography variant="subtittle1" >
            Entra con tu cuenta y contraseña
          </Typography>
          <Stack spacing={2} mt={4}>
            <Stack>
              <TextField
                variant="filled"
                label="Cuenta"
                sx={{ backgroundColor: "white" }}
              />
            </Stack>
            <Stack>
              <TextField
                variant="filled"
                label="Contraseña"
                sx={{ bgcolor: "white" }}
              />
            </Stack>
            <Stack>
                <Button variant="outlined" sx={{color: 'white', borderColor: 'white'}}>Entrar</Button>
            </Stack>
          </Stack>
        </Card>
      </Container>
    </>
  );
}
