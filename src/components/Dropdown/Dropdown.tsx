import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<DropdownProps>`
  padding: 8px;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : "#ffffff"};
  cursor: ${(props) =>
    props.disabled ? "not-allowed" : "pointer"};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export function Dropdown({
  disabled = false,
}: DropdownProps) {
  return (
    <StyledSelect disabled={disabled}>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </StyledSelect>
  );
}