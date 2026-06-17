import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<TextProps>`
  color: ${(props) =>
    props.disabled ? "#999999" : props.color || "#000000"};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export function Text({
  text = "Sample Text",
  color,
  disabled = false,
}: TextProps) {
  return (
    <StyledText color={color} disabled={disabled}>
      {text}
    </StyledText>
  );
}