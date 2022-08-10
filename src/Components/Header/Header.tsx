import {
  IconFavoriteFull,
  IconFavoriteOutline,
  IconHomeFull,
  IconHomeOutline,
} from "../../Common/Icon";
import NavBar from "../NavBar";
import { NavBarItem } from "../NavBar/types";
import { HeaderWrapper } from "./styles";

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
  return (
    <HeaderWrapper>
      <NavBar items={navBarItems}></NavBar>
    </HeaderWrapper>
  );
};

export default Header;
