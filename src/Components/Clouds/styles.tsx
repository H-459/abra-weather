import styled, { keyframes } from "styled-components/macro";

const cloudAnimation = keyframes`
    0% { left: 100%;}
    100% { left: -201px}
`

interface Props {
    positionY: number;
}
export const Cloud = styled.img<Props>`
    position: absolute;
    top: ${(props) => props.positionY}%;
    animation: ${cloudAnimation} 5s linear infinite;
    z-index: -1;
`   
export const CloudsWrapper = styled.div`
    
`;