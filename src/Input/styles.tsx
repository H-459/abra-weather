import styled from "styled-components/macro";

interface Props {
  error?: string;
}
export const InputWrapper = styled.div<Props>`
  padding: 14px 24px;
  border-radius: 10px;
  background-color: #f2f2f2;
  border: solid 1px transparent;

  ${(props) =>
    props.error
      ? `
    border: solid 1px #f0274b;
    ${Title} {
      color: #f0274b;
     } `
      : `
    :focus-within {
      border: solid 1px #222;
    }
  `}
`;

export const Title = styled.h6`
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1.25;
  color: #838baa;
`;

export const TextInput = styled.input`
  all: unset;
  font-family: inherit;
  font-size: 1.8rem;
  line-height: 1.5;
  color: #4d4d4d;
  width: 100%;
  ::placeholder {
    color: #bebebe;
  }
`;

export const Error = styled.p`
    font-family: inherit;
  font-size: 1.4rem;
  line-height: 1.25;
  color: #f0274b;
  padding-top: 4px;
`;