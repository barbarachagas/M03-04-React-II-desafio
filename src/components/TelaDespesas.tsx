import { useState } from "react";
import TabelaDespesas from "./TabelaDespesas";
import { Container, Box, Tab, Tabs } from "@material-ui/core";
import useDespesas, { formatValue } from "../helper/util";
import { useHistory, useParams } from "react-router-dom";
import SelecaoAnoMes from "./SelecaoAnoMes";
import TabelaResumo from "./TabelaResumo";

export default function TelaDespesas() {
  const { anoMes } = useParams<{ anoMes: string }>();
  const history = useHistory();
  const [aba, setAba] = useState(0);

  const { despesas, despesaTotal, despesasPorCategoria } = useDespesas(anoMes);

  function onChangeAnoMes(novoAnoMes: string) {
    history.push(`/despesas/${novoAnoMes}`);
  }

  return (
    <Container>
      <Box display="flex" padding="16px">
        <Box flex={1}>
          <SelecaoAnoMes
            anoMes={anoMes}
            onChangeAnoMes={onChangeAnoMes}
          ></SelecaoAnoMes>
        </Box>
        <Box>
          <span>
            Despesa total: <strong>R${formatValue(despesaTotal)}</strong>
          </span>
        </Box>
      </Box>
      <Tabs centered value={aba} onChange={(e, novaAba) => setAba(novaAba)}>
        <Tab label="resumo"></Tab>
        <Tab label="detalhes"></Tab>
      </Tabs>
      {aba === 0 && (
        <TabelaResumo
          despesasPorCategoria={despesasPorCategoria}
        ></TabelaResumo>
      )}
      {aba === 1 && <TabelaDespesas despesas={despesas}></TabelaDespesas>}
    </Container>
  );
}
