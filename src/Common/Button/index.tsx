import styled from "styled-components";
import { Theme } from "../../themes";
import { ButtonVariants } from "./types";

interface Props {
  variant?: ButtonVariants;
  theme?: Theme;
}

const getWhiteStyle = (props: Props) => {
  return `
    box-shadow: inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    color: #444e72;
}
  `;
};

const getPrimaryStyle = (props: Props) => {
  return `
    box-shadow: -4px 8px 50px 4px rgba(0, 0, 0, 0.16),
    inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1),
    inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(to left, #47bfdf, #4a91ff);
  `;
};

const getLinkStyle = (props: Props) => {
  return `
  `;
};

const getGhostStyle = (props: Props) => {
  return `
  `;
};

const Button = styled.button<Props>`
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 16px 54px;

  border-radius: 10px;
  font-size: ${({ theme }) => theme.buttonDefaultSize};
  font-weight: bold;
  line-height: 1.2;
  color: ${({ theme }) => theme.white};

  ${(props) => {
    switch (props.variant) {
      case "white":
        return getWhiteStyle(props);
      case "ghost":
        return getGhostStyle(props);
      case "link":
        return getLinkStyle(props);
      case "primary":
      default:
        return getPrimaryStyle(props);
    }
  }}
`;

export default Button;
