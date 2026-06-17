import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledRadio = styled.input`
  cursor: pointer;
`;

export function RadioButton({
  disabled = false,
}: RadioButtonProps) {
  return (
    <label>
      <StyledRadio
        type="radio"
        disabled={disabled}
      />
      Option
    </label>
  );
}