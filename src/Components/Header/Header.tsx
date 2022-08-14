import { useState } from "react";
import * as S from "./styles";

import {
  IconFavoriteFull,
  IconFavoriteOutline,
  IconHomeFull,
  IconHomeOutline,
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
    </HeaderWrapper>
  );
};

export default Header;
