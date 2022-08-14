import { NavBarWrapper } from "./styles";
import { NavBarProps } from "./types";
import * as S from "./styles";

const NavBar: React.FC<NavBarProps> = ({ items, className, selectedItem, onClick }) => {
  return (
    <NavBarWrapper className={className}>
      {items.map((item) => {
        return (
          <S.NavBarItemWrapper key={item.id}>
            <S.NavBarButton variant="ghost" onClick={() => onClick(item.id)}>
              { selectedItem === item.id ? item.active : item.inactive}
              <span>{item.text}</span>
            </S.NavBarButton>
              { selectedItem === item.id && <S.ActiveItem />}
          </S.NavBarItemWrapper>
        );
      })}
    </NavBarWrapper>
  );
};

export default NavBar;
