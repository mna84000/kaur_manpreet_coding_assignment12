import styled from "styled-components";
import { TableRowProps } from "./TableRow.types";

const StyledRow = styled.tr<TableRowProps>`
  background-color: ${(props) => (props.disabled ? "#cccccc" : "#ffffff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

export function TableRow({ disabled = false }: TableRowProps) {
  return (
    <table>
      <tbody>
        <StyledRow disabled={disabled}>
          <td>Table Row</td>
        </StyledRow>
      </tbody>
    </table>
  );
}