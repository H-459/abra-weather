import { ButtonProps } from "./types";
import * as S from "./Styles";

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  disabled,
  onClick,
}) => {
  return (
    <>
      <S.ButtonWrapper
        onClick={() => onClick()}
        disabled={disabled}
        variant={variant}
      >
        <S.TextContainer>{children}</S.TextContainer>
      </S.ButtonWrapper>
    </>
  );
};

export default Button;
