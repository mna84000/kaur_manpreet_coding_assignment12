import styled from "styled-components";
import { TableCellProps } from "./TableCell.types";

const StyledCell = styled.td<TableCellProps>`
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : "#ffffff"};
  padding: 10px;
  cursor: ${(props) =>
    props.disabled ? "not-allowed" : "default"};
`;

export function TableCell({
  disabled = false,
}: TableCellProps) {
  return (
    <table>
      <tbody>
        <tr>
          <StyledCell disabled={disabled}>
            Table Cell
          </StyledCell>
        </tr>
      </tbody>
    </table>
  );
}