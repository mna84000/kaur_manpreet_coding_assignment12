import styled from "styled-components";
import { TableHeaderProps } from "./TableHeader.types";

const StyledHeader = styled.th<TableHeaderProps>`
  background-color: ${(props) => (props.disabled ? "#cccccc" : "#eeeeee")};
  padding: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

export function TableHeader({ disabled = false }: TableHeaderProps) {
  return <StyledHeader disabled={disabled}>Table Header</StyledHeader>;
}