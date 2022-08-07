import styled, { css } from "styled-components/macro";
import Button from "../../Common/Button";
import Input from "../../Common/Input";
import media from "../../Utils/mediaQuery";
export const LoginPageWrapper = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  justify-content: center;
  align-items: center;

  ${media.lessThan("mobile")`
        align-items: unset;
        height: unset;
    `}
`;

export const Header = styled.div``;

export const Logo = styled.img`
  position: absolute;

  ${media.greaterThan("tablet")`
        top: 0px;
        left: 74px;
    `};

  ${media.between("mobile", "tablet")`
        top: 0px;
        left: 50px;
    `};

  ${media.lessThan("mobile")`
        top: -31px;
        left: 50%;
        transform: translateX(-50%)

    `};
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px #fff;
  border-radius: 30px;

  position: relative;

  ${media.greaterThan("tablet")`
        
        width: 732px;
        min-height: 743px;

`}

  ${media.between("mobile", "tablet")`
        top: 20px;
        min-height: 559px;
        width: 508px;
    `};

  ${media.lessThan("mobile")`
        top: 135px;
        min-height: calc(100vh - 135px);
        box-shadow: 0 -7px 30px 0 rgba(0, 0, 0, 0.16);
        border-radius: 30px 30px 0px 0px;

`}
`;

export const Title = styled.h1``;

export const InputWrapper = styled.div``;

export const EmailInput = styled(Input)``;

export const PasswordInput = styled(Input)``;

export const LoginButton = styled(Button)``;

export const Seperator = styled.div``;

export const Line = styled.hr``;

export const LoginWith = styled.span``;

export const ButtonsWrapper = styled.div``;

export const LoginButtons = styled(Button)``;
