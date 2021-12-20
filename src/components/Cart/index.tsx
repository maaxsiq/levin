import React, { useEffect } from "react";
import * as S from "./styles";
import productImage from "../../assets/product.png";
import lessImagem from "../../assets/less.png";
import plusImagem from "../../assets/plus.png";
import removeImagem from "../../assets/remove.png";
import { IProduct, useCart } from "../../hooks/cartProvider";

export const Cart: React.FC = () => {

  //Provider actions
  const {
    products,
    addProduct,
    lessProduct,
    removeProduct,
    removeAllProducts,
  } = useCart();

  //Handle less item
  function handleLessItem(_product: IProduct) {
    lessProduct(_product);
  }

  //Handle add item
  function handleAddItem(_product: IProduct) {
    addProduct(_product);
  }

  //Handle remove an item
  function handleRemoveItem(_product: IProduct) {
    removeProduct(_product);
  }

  //Handle remove all items
  function handleRemoveAll() {
    removeAllProducts();
  }

  //Component of providers products
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
                data-testid={'less-' + prdct.id}
                onClick={() => handleLessItem(prdct)}
              />
            </S.ButtonInside>
            <S.ButtonInside>
              <S.ButtonImage
                src={plusImagem}
                data-testid={'add-' + prdct.id}
                onClick={() => handleAddItem(prdct)}
              />
            </S.ButtonInside>
            <S.ButtonInsideX>
              <S.ButtonImage
                src={removeImagem}
                data-testid={'removeItem-' + prdct.id}
                onClick={() => handleRemoveItem(prdct)}
              />
            </S.ButtonInsideX>
          </S.ButtonsList>
        </S.CardItem>
      </S.ListItems>
    );
  });

  return (
    <S.Container data-testid="testCart">
      <S.Tittle>Cart</S.Tittle>
      <S.Footer>
        <S.ProductList>{ProductItem}</S.ProductList>
        <S.ButtonsContainer>
          <S.ButtonLeft data-testid='removeAll' onClick={() => handleRemoveAll()}>Clear</S.ButtonLeft>
          <S.ButtonRight onClick={() => alert("Successful purchase!")}>Finish</S.ButtonRight>
        </S.ButtonsContainer>
      </S.Footer>
    </S.Container>
  );
};
