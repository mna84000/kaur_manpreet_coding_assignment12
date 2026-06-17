import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor || "#007bff"};
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export function Button({
  text = "Click Me",
  backgroundColor,
  disabled = false,
}: ButtonProps) {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
}