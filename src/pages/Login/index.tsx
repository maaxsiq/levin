import React from "react";
import * as S from "./styles";
import { FormLogin } from "../../components/FormLogin";
import { Welcome } from "../../components/Welcome";

export const Login: React.FC = () => {
  return (
    <S.Container>
      <S.CenterContainer>
        <Welcome/>
        <S.CenterLine />
        <FormLogin />
      </S.CenterContainer>
    </S.Container>
  );
};
