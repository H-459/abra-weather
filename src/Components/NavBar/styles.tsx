import styled from "styled-components";
import Button from "../../Common/Button";

export const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
`;

export const NavBarItemWrapper = styled.div``;

export const NavBarButton = styled(Button)`
  span {

      display: flex;
      align-items: center;
      gap: 8px;
    }
    padding: 0;
    border: none;
`;
