import * as S from "./styles";
import { SearchBoxProps } from "./types";

const SearchBox: React.FC<SearchBoxProps> = ({ className }) => {
  return <S.SearchBoxWrapper className={className}></S.SearchBoxWrapper>;
};

export default SearchBox;
