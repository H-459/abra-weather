import { useState } from "react";
import * as S from "./styles";

import {
  IconCelsuis,
  IconFahrenheit,
  IconFavoriteFull,
  IconFavoriteOutline,
  IconHomeFull,
  IconHomeOutline,
  IconLogout,
  IconMap,
  IconMoonDark,
  IconSunDark,
} from "../../Common/Icon";
import NavBar from "../NavBar";
import { NavBarItem } from "../NavBar/types";
import { HeaderWrapper } from "./styles";
import logo from "../../Images/logo.svg";
import SearchBox from "../../Common/SearchBox";
const Header = () => {
  const navBarItems: NavBarItem[] = [
    {
      id: "Home",
      active: <IconHomeFull />,
      inactive: <IconHomeOutline />,
      text: "Home",
    },
    {
      id: "Favorites",
      active: <IconFavoriteFull />,
      inactive: <IconFavoriteOutline />,
      text: "Favorites",
    },
  ];

  const [currentSelectedItem, setCurrentSelectedItem] = useState<string>(
    navBarItems[0].id
  );
  return (
    <HeaderWrapper>
      <S.LeftSideContainer>
        <S.LogoContainer>
          <S.Logo src={logo} />
        </S.LogoContainer>
        <S.StyledNavBar
          items={navBarItems}
          onClick={(id) => {
            setCurrentSelectedItem(id);
          }}
          selectedItem={currentSelectedItem}
        ></S.StyledNavBar>
      </S.LeftSideContainer>
      <S.SearchBoxContainer>
        <S.StyledSearchBox></S.StyledSearchBox>
      </S.SearchBoxContainer>
      <S.RightSideContainer>
        <S.SwitchToMapButton variant="link" onClick={() => {}}>
          <IconMap />
          <span>Switch to map</span>
        </S.SwitchToMapButton>
        <S.TogglesWrapper>
          <S.TemperatureSwitch
            id={"tempeature-switch"}
            left={<IconFahrenheit />}
            right={<IconCelsuis />}
            value={true}
            onChange={() => {}}
          />
          <S.DarkModeSwitch
            id={"darkmode-switch"}
            left={<IconSunDark />}
            right={<IconMoonDark />}
            value={true}
            onChange={() => {}}
          />
        </S.TogglesWrapper>
        <S.LogoutButton variant="link" onClick={() => {}}>
          <IconLogout />
          <span>Log out</span>
        </S.LogoutButton>
      </S.RightSideContainer>
    </HeaderWrapper>
  );
};

export default Header;
