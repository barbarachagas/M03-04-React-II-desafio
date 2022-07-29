import { Container, Box, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { criaSessao, IUsuario } from "../desafio-backend/backend";

interface ITelaLoginProps {
  onLogin: (usuario: IUsuario) => void;
}

export default function TelaLogin(props: ITelaLoginProps) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  function onSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    setError("");
    criaSessao(email, senha).then(props.onLogin, () => {
      setError("E-mail ou senha incorretos.");
    });
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <h1>Despesas</h1>
        <p>Digite e-mail e senha para entrar.</p>
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!error}
          label="E-mail"
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          type="password"
          label="Senha"
          error={!!error}
          helperText={error}
        />
        <Box textAlign="right">
          <Button type="submit" variant="contained" color="primary">
            Entrar
          </Button>
        </Box>
      </form>
    </Container>
  );
}
