import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<CardProps>`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : "#ffffff"};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export function Card({
  title = "Card Title",
  disabled = false,
}: CardProps) {
  return (
    <StyledCard disabled={disabled}>
      <h3>{title}</h3>
      <p>Card content</p>
    </StyledCard>
  );
}