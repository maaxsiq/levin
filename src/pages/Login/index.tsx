import React, { useState } from "react";
import * as S from "./styles";
import image from "../../assets/logo-2x.png";
import { useHistory } from "react-router-dom";

export const Login: React.FC = () => {

  //History to control the navigation
  let history = useHistory();

  //Functon active to set the path of navigation
  function goTo(path: string) {
    history.push(path);
  }

  return (
    <S.Container>
      <S.CenterContainer>
        <S.LeftContainer>
          <S.Image src={image} />
          <S.LeftText>liven.tech</S.LeftText>
          <S.Button onClick={() => window.open("https://liven.tech/pt")}>
            Learn more
          </S.Button>
        </S.LeftContainer>
        <S.CenterLine />
        <S.RightContainer>
          <S.RightTextUp>Welcome!</S.RightTextUp>
          <S.Input placeholder="User" type="text" />
          <S.Input placeholder="Password" type="password" />
          <S.ButtonRight onClick={() => goTo("/home")}>Login</S.ButtonRight>
        </S.RightContainer>
      </S.CenterContainer>
    </S.Container>
  );
};
