import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  display: inline-block;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor || "#f0f0f0"};
  color: ${(props) => (props.disabled ? "#666666" : "#000000")};
  padding: 8px 12px;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export function Label({
  text = "Label Text",
  backgroundColor,
  disabled = false,
}: LabelProps) {
  return (
    <StyledLabel backgroundColor={backgroundColor} disabled={disabled}>
      {text}
    </StyledLabel>
  );
}