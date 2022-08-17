import styled from "styled-components/macro";
import Button from "../../Common/Button";
import SearchBox from "../../Common/SearchBox";
import Switch from "../../Common/Switch";
import media from "../../Utils/mediaQuery";
import NavBar from "../NavBar";

export const HeaderWrapper = styled.div`
  width: 100%;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  background-color: #48bae4;
  height: 94px;
  display: flex;
  align-items: center;
  padding: 0px 70px;
  ${media.between("mobile", "tablet")`
    padding: 0px 50px;
  `};
  gap: 10px;
`;

export const LogoContainer = styled.div``;
export const Logo = styled.img`
  width: 110px;
  height: 72px;
`;

export const StyledNavBar = styled(NavBar)`
  width: 100%;
`;

export const StyledSearchBox = styled(SearchBox)`
  width: 372px;
`;
export const SearchBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
`;
export const LeftSideContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 35%;
  height: 100%;
  align-items: center;
`;

export const RightSideContainer = styled.div`
  display: flex;
  width: 35%;
  gap: 15px;
  justify-content: end;
  align-items: center;
`;

export const HeaderLinkedButton = styled(Button)`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  display: flex;
  align-items: center;
  gap: 8px;

  ${media.lessThan("tablet")`
    display:flex;
    justify-content: end;

  span {
      display: none;
    }
  `};
`;
export const SwitchToMapButton = styled(HeaderLinkedButton)`
  width: 30%;
  min-width: 154px;
  ${media.lessThan("tablet")`
    min-width: unset;
    width:10%;
  `};
`;

export const LogoutButton = styled(HeaderLinkedButton)`
  width: 25%;
  margin-left: auto;
  min-width: 101px;
  ${media.lessThan("tablet")`
  margin-left: unset;
  min-width: unset;
  width: 10%;
  `};
`;

export const TogglesWrapper = styled.div`
  display: flex;
  gap: 30px;
  width: 30%;
  min-width: 200px;
  ${media.lessThan("tablet")`
  justify-content: center;
    order: -1;
    width:80%;

    `};
`;
export const TemperatureSwitch = styled(Switch)``;

export const DarkModeSwitch = styled(Switch)``;
