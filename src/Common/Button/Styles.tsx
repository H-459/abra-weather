import styled, { css } from "styled-components/macro";
import { ButtonProps } from "./types";

const getWhiteStyle = () => {
  return `
      box-shadow: inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
      background-color: #fff;
      color: #444e72;
  }
    `;
};

const getPrimaryStyle = () => {
  return `
      box-shadow: -4px 8px 50px 4px rgba(0, 0, 0, 0.16),
      inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1),
      inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
      background-image: linear-gradient(to left, #47bfdf, #4a91ff);
      `;
};

const getLinkStyle = () => {
  return `
    color: #222;
    text-decoration: underline;
    font-weight: normal;
    padding: 0px 0px;


    `;
};

const getGhostStyle = () => {
  return `
    border: solid 1px #fff;
    color: #fff;
  }
    `;
};

export const TextContainer = styled.span``;

export const ButtonWrapper = styled.button<ButtonProps>`
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
        return getWhiteStyle();
      case "ghost":
        return getGhostStyle();
      case "link":
        return getLinkStyle();
      case "primary":
      default:
        return getPrimaryStyle();
    }
  }}
  &:disabled ${TextContainer} {
    opacity: 0.4;
  }
`;
