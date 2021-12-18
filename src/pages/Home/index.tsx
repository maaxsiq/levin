import React from "react";
import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { Products } from "../../components/Products";
import * as S from "./styles";
import axios from "axios";

export const Home: React.FC = () => {
  const [products, setProducts] = React.useState([]);

  //Handler of HTTP request GET
  React.useEffect((): any => {
    return axios
      .get("https://5d6da1df777f670014036125.mockapi.io/api/v1/product")
      .then((res) => res.data)
      .then((res) => setProducts(res));
  }, []);

  return (
    <S.Container>
      <Header />
      <S.InsideContainer>
        <Products />
        <Cart />
      </S.InsideContainer>
    </S.Container>
  );
};
