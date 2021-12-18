import React from "react";
import * as S from "./styles";

export const Cart: React.FC = () => {
  return (
    <S.Container>
      <S.Tittle>Cart</S.Tittle>
      <S.Footer>
        <S.ButtonLeft>Clear</S.ButtonLeft>
        <S.ButtonRight>Finish</S.ButtonRight>
      </S.Footer>
    </S.Container>
  );
};
