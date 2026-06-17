import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const StyledHero = styled.div<HeroImageProps>`
  width: 100%;
  height: 300px;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : "#4a90e2"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;

  @media (max-width: 600px) {
    height: 200px;
    font-size: 24px;
  }
`;

export function HeroImage({
  disabled = false,
}: HeroImageProps) {
  return (
    <StyledHero disabled={disabled}>
      Hero Image
    </StyledHero>
  );
}