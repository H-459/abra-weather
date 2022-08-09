import * as S from "./styles";
import logo from "../../Images/logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconFacebookLogo, IconGoogleLogo } from "../../Common/Icon";
import { setConstantValue } from "typescript";

interface FormData {
  email: string;
  password: string;
}
const schema = yup
  .object({
    email: yup
      .string()
      .email("Field must be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .required("No password provided.")
      .min(6, "Password is too short - should be 6 chars minimum"),
  })
  .required();
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // handleSubmit(data);
  };
  return (
    <S.LoginPageWrapper>
      <S.Header>
        <S.Logo src={logo} />
      </S.Header>
      <S.Modal>
        <S.Title>Log in</S.Title>
        <S.InputWrapper>
          <S.EmailInput
            {...register("email")}
            placeholder="example@example.com"
            title="Email Account"
            error={errors?.email?.message}
            onChange={(e) => {
              setValue("email", e.target.value);
            }}
          />
          <S.PasswordInput
            {...register("password")}
            placeholder="6 characters and digit numbers"
            title="Password"
            error={errors?.password?.message}
            onChange={(e) => {
              setValue("password", e.target.value);
            }}
          />
        </S.InputWrapper>
        <S.LoginButton variant="primary" onClick={handleSubmit(onSubmit)}>
          Log in
        </S.LoginButton>
        <S.Seperator>
          <S.Line />
          <S.LoginWith>Or log in with</S.LoginWith>
          <S.Line />
        </S.Seperator>
        <S.ButtonsWrapper>
          <S.LoginButtons variant="link" onClick={() => {}}>
            <IconFacebookLogo />
            <span>Log in with Facebook</span>
          </S.LoginButtons>
          <S.LoginButtons variant="link" onClick={() => {}}>
            <IconGoogleLogo />
            <span>Log in with Google</span>
          </S.LoginButtons>
        </S.ButtonsWrapper>
      </S.Modal>
    </S.LoginPageWrapper>
  );
};

export default LoginPage;
