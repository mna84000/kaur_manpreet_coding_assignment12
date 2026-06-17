import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<ImgProps>`
  max-width: 100%;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export function Img({
  src = "https://via.placeholder.com/300",
  alt = "Sample Image",
  disabled = false,
}: ImgProps) {
  return <StyledImg src={src} alt={alt} disabled={disabled} />;
}