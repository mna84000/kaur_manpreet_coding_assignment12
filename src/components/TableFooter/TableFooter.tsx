import styled from "styled-components";
import { TableFooterProps } from "./TableFooter.types";

const StyledFooter = styled.tfoot<TableFooterProps>`
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : "#eeeeee"};
  cursor: ${(props) =>
    props.disabled ? "not-allowed" : "default"};
`;

export function TableFooter({
  disabled = false,
}: TableFooterProps) {
  return (
    <table>
      <StyledFooter disabled={disabled}>
        <tr>
          <td>Table Footer</td>
        </tr>
      </StyledFooter>
    </table>
  );
}