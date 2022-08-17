import { forwardRef } from "react";
import * as S from "./styles";
import { InputProps } from "./types";
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ title, type = "text", value, onChange, onBlur, placeholder, error, ...props }) => {
    return (
      <S.InputContainer>
        <S.InputWrapper error={error}>
          <S.Title>{title}</S.Title>
          <S.TextInput
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
          />
        </S.InputWrapper>
        {error && <S.Error>{error}</S.Error>}
      </S.InputContainer>
    );
  }
);

export default Input;
