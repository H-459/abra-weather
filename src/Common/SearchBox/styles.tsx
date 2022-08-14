import styled from "styled-components/macro";

export const SearchBoxWrapper = styled.input`
  all: unset;
  height: 54px;
  padding: 12px 24px;
  border-radius: 15px;
  box-shadow: inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1),
    inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.2;
  color: #222;
  ::placeholder {
    color: #bebebe;
  }

  box-sizing: inherit;
`;
