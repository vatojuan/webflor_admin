import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Container, Paper, Typography } from "@mui/material";

export default function ConfirmEmail() {
  const router = useRouter();
  const { code } = router.query;
  const [message, setMessage] = useState("Procesando confirmación...");

  useEffect(() => {
    if (code) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/cv/confirm?code=${code}`)
        .then((response) => {
          setMessage("✅ ¡Cuenta confirmada exitosamente!");
          setTimeout(() => {
            window.location.href = "https://fapmendoza.com/login";
          }, 3000);
        })
        .catch((error) => {
          console.error("❌ Error al confirmar:", error);
          setMessage("❌ Error al confirmar la cuenta.");
        });
    }
  }, [code]);

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Confirmación de Email
        </Typography>
        <Typography variant="body1">{message}</Typography>
      </Paper>
    </Container>
  );
}
