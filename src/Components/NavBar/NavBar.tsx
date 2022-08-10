import { NavBarWrapper } from "./styles";
import { NavBarProps } from "./types";
import * as S from "./styles";

const NavBar: React.FC<NavBarProps> = ({ items }) => {
  return (
    <NavBarWrapper>
      {items.map((item) => {
        return <S.NavBarItemWrapper key={item.id}>
            <S.NavBarButton  variant="ghost" onClick={() => {}}>
                {item.inactive}
                <span>{item.text}</span>
            </S.NavBarButton>
        </S.NavBarItemWrapper>;
      })}
    </NavBarWrapper>
  );
};

export default NavBar;
