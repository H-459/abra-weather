import { ButtonProps } from "./types";
import * as S from "./Styles";

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  disabled,
  onClick,
  className,
}) => {
  return (
    <>
      <S.ButtonWrapper
        className={className}
        onClick={() => onClick()}
        disabled={disabled}
        variant={variant}
      >
        {children}
      </S.ButtonWrapper>
    </>
  );
};

export default Button;
