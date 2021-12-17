import React from "react";
import * as S from "./styles";
import { useHistory } from "react-router-dom";

export const FormLogin: React.FC = () => {
  //History to control the navigation
  let history = useHistory();

  //Functon active to set the path of navigation
  function goTo(path: string) {
    history.push(path);
  }

  return (
    <S.RightContainer>
      <S.RightTextUp>Welcome!</S.RightTextUp>
      <S.Input placeholder="User" type="text" />
      <S.Input placeholder="Password" type="password" />
      <S.ButtonRight onClick={() => goTo("/home")}>Login</S.ButtonRight>
    </S.RightContainer>
  );
};
