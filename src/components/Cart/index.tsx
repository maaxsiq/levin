import React from "react";
import * as S from "./styles";
import productImage from "../../assets/product.png";
import lessImagem from "../../assets/less.png";
import plusImagem from "../../assets/plus.png";
import removeImagem from "../../assets/remove.png";
import { IProduct, useCart } from "../../hooks/cartProvider";

export const Cart: React.FC = () => {
  const {
    products,
    addProduct,
    lessProduct,
    removeProduct,
    removeAllProducts,
  } = useCart();

  function handleLessItem(_product: IProduct) {
    lessProduct(_product);
  }

  function handleAddItem(_product: IProduct) {
    addProduct(_product);
  }

  function handleRemoveItem(_product: IProduct) {
    removeProduct(_product);
  }

  function handleRemoveAll() {
    removeAllProducts();
  }

  const ProductItem = products.map((prdct) => {
    return (
      <S.ListItems key={`${prdct.id} - ${prdct.qnt}`} id={prdct.id}>
        <S.CardItemQnt>{prdct.qnt}</S.CardItemQnt>
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
              <S.ButtonImage
                src={lessImagem}
                onClick={() => handleLessItem(prdct)}
              />
            </S.ButtonInside>
            <S.ButtonInside>
              <S.ButtonImage
                src={plusImagem}
                onClick={() => handleAddItem(prdct)}
              />
            </S.ButtonInside>
            <S.ButtonInsideX>
              <S.ButtonImage
                src={removeImagem}
                onClick={() => handleRemoveItem(prdct)}
              />
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
          <S.ButtonLeft onClick={() => handleRemoveAll()}>Clear</S.ButtonLeft>
          <S.ButtonRight onClick={() => alert("Successful purchase!")}>Finish</S.ButtonRight>
        </S.ButtonsContainer>
      </S.Footer>
    </S.Container>
  );
};
