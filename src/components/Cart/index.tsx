import React from "react";
import * as S from "./styles";
import productImage from "../../assets/product.png";
import axios from "axios";
import lessImagem from "../../assets/less.png";
import plusImagem from "../../assets/plus.png";
import removeImagem from "../../assets/remove.png";

export const Cart: React.FC = () => {
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

  function handleLessItem (event: React.MouseEvent) {
    let id = event.currentTarget.getAttribute("id");
    alert(id);
  }

  function handleAddItem (event: React.MouseEvent) {
    let id = event.currentTarget.getAttribute("id");
    alert(id);
  }

  function handleRemoveItem (event: React.MouseEvent) {
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
      <S.ListItems key={prdct.id} id={prdct.id}>
        <S.CardItemQnt>1x</S.CardItemQnt>
        <S.CardItem>
          <S.ItemLogo src={productImage} />
          <S.InsideCard>
            <S.ItemName>{prdct.name}</S.ItemName>
            <S.InsideCardDown>
              <S.ItemPrice>{"Price: $" + prdct.price}</S.ItemPrice>
              <S.ItemStock>{"Stock: " + prdct.stock}</S.ItemStock>
            </S.InsideCardDown>
          </S.InsideCard>
          <S.ButtonsList>
            <S.ButtonInside>
              <S.ButtonImage src={lessImagem} onClick={handleLessItem}/>
            </S.ButtonInside>
            <S.ButtonInside>
              <S.ButtonImage src={plusImagem} onClick={handleAddItem}/>
            </S.ButtonInside>
            <S.ButtonInsideX>
              <S.ButtonImage src={removeImagem} onClick={handleRemoveItem} />
            </S.ButtonInsideX>
          </S.ButtonsList>
        </S.CardItem>
      </S.ListItems>
    );
  });

  return (
    <S.Container>
      <S.Tittle>Cart</S.Tittle>
      <S.Footer>
        <S.ProductList>{ProductItem}</S.ProductList>
        <S.ButtonsContainer>
          <S.ButtonLeft>Clear</S.ButtonLeft>
          <S.ButtonRight>Finish</S.ButtonRight>
        </S.ButtonsContainer>
      </S.Footer>
    </S.Container>
  );
};
