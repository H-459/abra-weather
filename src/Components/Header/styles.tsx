import styled from "styled-components/macro";
import SearchBox from "../../Common/SearchBox";
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

export const LogoContainer  = styled.div`

`;
export const Logo = styled.img`
    width:110px;
    height: 72px;

`;

export const StyledNavBar = styled(NavBar)`
  width:100%;
`;

export const StyledSearchBox = styled(SearchBox)`
  width: 372px;
`
export const SearchBoxContainer = styled.div`
  /* margin-left: auto;
  margin-right: auto; */

  width: 30%;
`
export const LeftSideContainer = styled.div`
  display: flex;
  gap: 15px;
  width:35%;
  height: 100%;
  align-items: center;
`


