import styled, { keyframes } from "styled-components/macro";

const cloudAnimation = keyframes`
    0% { left: 500px}
    100% { left: 0px}
`

export const Cloud = styled.img`
    position: absolute;
    top: 500px;
    animation: ${cloudAnimation} 5s linear;
    z-index: -1;
`   
export const CloudsWrapper = styled.div`
    
`;