import styled from "styled-components/macro";
import { SeverityOptions } from "./types";

interface Props {
  severity: SeverityOptions;
}
export const AlertWrapper = styled.div<Props>`
  border-radius: 10px;
  background-color: #ffe7e7;
  padding: 24px;
  font-family: Overpass;
  font-size: 14px;
  line-height: 1.25;
  display: flex;
  gap: 16px;
  align-items: center;

  ${(props) =>
    props.severity === "error"
      ? `
        background-color: # ffe7e7;
        color: #4d4d4d;
      `:`
        color: #fff;
        background-color: rgba(0, 0, 0, 0.8);
      `}
`;

export const Icon = styled.img`

`;
