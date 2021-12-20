import React from "react";
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { Products } from "../../components/Products";
import * as S from "./styles";

export const Home: React.FC = () => {
  return (
    <S.Container data-testid="testContainer">
      <Header />
      <S.InsideContainer>
        <Products />
        <Cart />
      </S.InsideContainer>
    </S.Container>
  );
};
