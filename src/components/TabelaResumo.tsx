import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
} from "@material-ui/core";
import { formatValue, IDespesaCategoria } from "../helper/util";

interface ITabelaResumoProps {
  despesasPorCategoria: IDespesaCategoria[];
}

export default function TabelaResumo(props: ITabelaResumoProps) {
  return (
    <TableContainer component="div">
      <Table aria-label="Tabela de despesas">
        <TableHead>
          <TableRow>
            <TableCell>Categoria</TableCell>
            <TableCell align="right">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.despesasPorCategoria.map((despesaCategoria) => (
            <TableRow key={despesaCategoria.categoria}>
              <TableCell>{despesaCategoria.categoria}</TableCell>
              <TableCell align="right">
                {formatValue(despesaCategoria.despesaTotal)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
