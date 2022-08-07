import { forwardRef } from "react";
import * as S from "./styles";
import { InputProps } from "./types";
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ title, type = "text", value, onChange, placeholder, error }) => {
    return (
      <>
        <S.InputWrapper error={error}>
          <S.Title>{title}</S.Title>
          <S.TextInput
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
          />
        </S.InputWrapper>
        {error && <S.Error>{error}</S.Error>}
      </>
    );
  }
);

export default Input;
