import styled from "styled-components/macro";

export const SwitchWrapper = styled.div`
  width: 73px;
  height: 39px;
  border-radius: 100px;
  border: solid 1px #444e72;
  background-color: #fff;
  position: relative;
`;

interface Props {
  checked: boolean;
}
export const SwitchToggle = styled.label<Props>`
  position: absolute;
  width: 32px;
  height: 32px;
  background-color: #838baa;
  border-radius: 50%;

  ${(props) =>
    props.checked
      ? `
    top: 4px;
    left: 4px;
  `
      : `
  top: 4px;
  right:4px;`}
`;

export const SwitchCheckbox = styled.input`
  visibility: hidden;
  width: 0px;
  height: 0px;
`;
export const SwitchLeftThumbWrapper = styled.div` 
    position:absolute;
    left: 8px;
    top: 8px;
    
`;
    
export const SwitchRightThumbWrapper = styled.div`
    position:absolute;
    right: 8px;
    top: 8px;
    
`;
