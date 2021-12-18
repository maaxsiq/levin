import React from "react";
import * as S from "./styles";
import axios from "axios";
import productImage from "../../assets/product.png";

export const Products: React.FC = () => {
  const [products, setProducts] = React.useState([
    {
      createAt: "",
      id: "",
      image: "",
      name: "",
      price: "",
      stock: 0,
    },
  ]);

  function handleAddProduct(event: React.MouseEvent) {
    let id = event.currentTarget.getAttribute("id");
    alert(id);
  }

  //Handler of HTTP request GET
  React.useEffect((): any => {
    return axios
      .get("https://5d6da1df777f670014036125.mockapi.io/api/v1/product")
      .then((res) => res.data)
      .then((res) => {
        setProducts(res);
      });
  }, []);

  const ProductItem = products.map((prdct) => {
    return (
      <S.ListItems
        key={prdct.id}
        id={prdct.id}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          handleAddProduct(event);
        }}
      >
        <S.CardItem>
          <S.ItemLogo src={productImage} />
          <S.InsideCard>
            <S.ItemName>{prdct.name}</S.ItemName>
            <S.InsideCardDown>
              <S.ItemPrice>{"Price: $" + prdct.price}</S.ItemPrice>
              <S.ItemStock>{"Stock: " + prdct.stock}</S.ItemStock>
            </S.InsideCardDown>
          </S.InsideCard>
        </S.CardItem>
      </S.ListItems>
    );
  });

  return (
    <S.Container>
      <S.Tittle>Products</S.Tittle>
      {ProductItem}
    </S.Container>
  );
};
