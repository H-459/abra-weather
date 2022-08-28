import styled from "styled-components/macro";
import Button from "../../Common/Button";

export const NavBarWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  margin-left: auto;
  margin-right:auto;
  max-width:300px;
`;

export const NavBarItemWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  padding: 0px 10px;
`;
export const NavBarButton = styled(Button)`
  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  padding: 0;
  border: none;
`;

export const ActiveItem = styled.div`
  height: 5px;
  background-color: #fff;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left:0px;
`;
