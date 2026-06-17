import { TableProps } from "./Table.types";

export function Table({
  disabled = false,
}: TableProps) {
  return (
    <table border={1}>
      <tbody>
        <tr>
          <td>
            {disabled ? "Disabled Table" : "Sample Table"}
          </td>
        </tr>
      </tbody>
    </table>
  );
}