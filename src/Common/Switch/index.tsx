import * as S from "./styles";
import { SwitchProps } from "./types";

const Switch: React.FC<SwitchProps> = ({ id, value, onChange, left, right}) => {
  return (
    <>
      <S.SwitchWrapper>
        <S.SwitchCheckbox
          id={id}
          type="checkbox"
          checked={value}
          onChange={() => {
            onChange();
          }}
        />
        <S.SwitchLeftThumbWrapper>{left}</S.SwitchLeftThumbWrapper>
        <S.SwitchRightThumbWrapper>{right}</S.SwitchRightThumbWrapper>
        <S.SwitchToggle htmlFor={id}></S.SwitchToggle>
      </S.SwitchWrapper>
    </>
  );
};

export default Switch;
