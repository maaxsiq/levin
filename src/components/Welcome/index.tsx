import React from "react";
import * as S from "./styles";
import image from "../../assets/logo-2x.png";

export const Welcome: React.FC = () => {
  return (
    <S.LeftContainer>
      <S.Image src={image} />
      <S.LeftText>liven.tech</S.LeftText>
      <S.Button onClick={() => window.open("https://liven.tech/pt")}>
        Learn more
      </S.Button>
    </S.LeftContainer>
  );
};
