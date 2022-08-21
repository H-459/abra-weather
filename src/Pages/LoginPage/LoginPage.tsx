import * as S from "./styles";
import logo from "../../Images/logo.svg";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconFacebookLogo, IconGoogleLogo } from "../../Common/Icon";
import { setConstantValue } from "typescript";
import Alert from "../../Common/Alert";
import Input from "../../Common/Input";
import { useState } from "react";
import { useAuthentication } from "../../Services/Authentication";
import { useNavigate } from "react-router-dom";

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
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const { login, logout, authenticationError } = useAuthentication(
    (lastLocation: string) => {
      if (!lastLocation) navigate("/");
      else navigate(lastLocation);
    }
  );

  const onSubmit = async (data: any) => {
    login(data.email, data.password);
  };

  return (
    <S.LoginPageWrapper>
      <S.Header>
        <S.Logo src={logo} />
      </S.Header>
      <S.Modal>
        <S.Title>Log in</S.Title>
        <S.InputWrapper>
          {authenticationError && (
            <Alert severity="error">{authenticationError}</Alert>
          )}
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                placeholder="example@example.com"
                title="Email Account"
                error={errors?.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                placeholder="6 characters and digit numbers"
                title="Password"
                type="password"
                error={errors?.password?.message}
              />
            )}
          />

          <S.LoginButton variant="primary" onClick={handleSubmit(onSubmit)}>
            Log in
          </S.LoginButton>
        </S.InputWrapper>
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
