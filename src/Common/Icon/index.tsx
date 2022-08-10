import { ReactComponent as IconFacebookLogo } from "./Icons/logo-facebook.svg";
import { ReactComponent as IconGoogleLogo } from "./Icons/logo-google.svg";
import { ReactComponent as IconYellowMoon } from "./Icons/moon-flat.svg";
import { ReactComponent as IconYellowSun } from "./Icons/sun-flat.svg";
import { ReactComponent as IconWhiteSun } from "./Icons/sun-white.svg";
import { ReactComponent as IconMoonDark } from "./Icons/moon-dark.svg";
import { ReactComponent as IconSunDark } from "./Icons/sun-dark.svg";
import { ReactComponent as IconFavoriteFull }  from "./Icons/fav-full.svg";
import { ReactComponent as IconFavoriteOutline } from "./Icons/fav-outline.svg";
import { ReactComponent as IconHomeFull } from "./Icons/home-full.svg";
import { ReactComponent as IconHomeOutline } from "./Icons/home-outline.svg";


interface IconProp {
  Active : any;
  Inactive: any;
  isActive: boolean;
  alt?: string;
};

const ActiveIcon: React.FC<IconProp> = ({isActive, Active, Inactive, alt}) => {
  return (<>
  {isActive ? <Active /> : <Inactive />}
  </>)
}


export {
  IconFacebookLogo,
  IconGoogleLogo,
  IconYellowMoon,
  IconYellowSun,
  IconWhiteSun,
  IconMoonDark,
  IconSunDark,
  IconFavoriteFull,
  IconFavoriteOutline,
  IconHomeFull,
  IconHomeOutline,
  ActiveIcon
};
