import styled, { keyframes } from "styled-components/macro";

const cloudAnimation = keyframes`
    0% { left: 100%;}
    100% { left: -201px}
`;

interface Props {
  positionY: number;
  delayTime: number;
  speed: number;
}
export const Cloud = styled.img<Props>`
  left: 100%;
  position: absolute;
  top: ${(props) => props.positionY}%;
  animation: ${cloudAnimation} ${(props) => props.speed}s linear infinite ${(props) => props.delayTime}s;
  z-index: -1;
`;
export const CloudsWrapper = styled.div``;
