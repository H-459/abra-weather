import styled from "styled-components/macro";
import Button from "../../Common/Button";

export const NavBarWrapper = styled.div`
  display: flex;
  gap: 15px;
  height: 100%;
  justify-content: center;
`;

export const NavBarItemWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
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
`;
