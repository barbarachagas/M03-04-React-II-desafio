import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TelaDespesas from "../components/TelaDespesas";
import { useEffect, useState } from "react";
import {
  finalizaSessao,
  IUsuario,
  obtemUsuario,
} from "../desafio-backend/backend";
import TelaLogin from "../components/TelaLogin";
import { Box, Button } from "@material-ui/core";

function App() {
  const [usuario, setUsuario] = useState<IUsuario | null>(null);

  useEffect(() => {
    obtemUsuario().then(setUsuario, () => setUsuario(null));
  }, []);

  if (usuario) {
    return (
      <>
        <Box padding="32px" display="flex" alignItems="center">
          <Box flex={1}>Olá {usuario.nome}!</Box>
          <Button onClick={sair}>Sair</Button>
        </Box>
        <Router>
          <Switch>
            <Route path="/despesas/:anoMes">
              <TelaDespesas></TelaDespesas>
            </Route>
          </Switch>
        </Router>
      </>
    );
  } else {
    return <TelaLogin onLogin={setUsuario} />;
  }

  function sair() {
    finalizaSessao().then(() => setUsuario(null));
  }
}

export default App;
