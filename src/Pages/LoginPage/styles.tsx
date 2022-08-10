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
  padding-top: 54px;

  position: relative;

  ${media.greaterThan("tablet")`
        
        width: 732px;
        min-height: 743px;

`}

  ${media.between("mobile", "tablet")`
        top: 20px;
        min-height: 559px;
        width: 508px;
        padding-top: 40px;
    `};

  ${media.lessThan("mobile")`
        top: 135px;
        width: 100%;
        min-height: calc(100vh - 135px);
        box-shadow: 0 -7px 30px 0 rgba(0, 0, 0, 0.16);
        border-radius: 30px 30px 0px 0px;

`}
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  color: #444e72;
  padding-bottom: 32px;
  ${media.lessThan("mobile")`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.25;
`};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 354px;
`;

export const EmailInput = styled(Input)``;

export const PasswordInput = styled(Input)``;

export const LoginButton = styled(Button)`
  margin-top: 8px;
  width: 100%;
`;

export const Seperator = styled.div`
  margin-top: 48px;
  display: flex;
  gap: 16px;
  width: 424px;

  ${media.between("mobile", "tablet")`
    width: 400px;
    `};

  ${media.lessThan("mobile")`
  width: 354px;

`};
`;
export const Line = styled.hr`
  border: none;
  height: 2px;
  background-color: #f2f2f2;
  align-self: center;
  flex: 1;
`;

export const LoginWith = styled.span`
  font-size: 1.4rem;
  line-height: 1.25;
  color: #444e72;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin: 40px 0px;
  gap: 16px;
  ${media.lessThan("mobile")`
    flex-direction: column;
    margin-top: 52px;
    gap: 47px;
`}
`;

export const LoginButtons = styled(Button)`
  span {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
  }
`;
