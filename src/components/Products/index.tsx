import React from "react";
import * as S from "./styles";
import axios from "axios";
import productImage from "../../assets/product.png";
import { IProduct, useCart } from "../../hooks/cartProvider";

export const Products: React.FC = () => {
  const { addProduct } = useCart();

  const [products, setProducts] = React.useState<IProduct[]>([]);

  //Handler of add product to cart
  function handleAddProduct(_product: IProduct) {
    if (!_product.qnt) _product.qnt = 1;
    addProduct(_product);
  }

  //Function to get products
  function getProducts() {
    return axios
      .get("https://5d6da1df777f670014036125.mockapi.io/api/v1/product")
      .then((res) => {
        return res.data
      })
      .then((res) => {
        setProducts(res);
    });
  }

  //Handler of HTTP request GET
  React.useEffect((): any => {
    getProducts();
  }, []);

  //Create the list of products
  const ProductItem = products.map((prdct) => {
    return (
      <S.ListItems
        key={prdct.id}
        id={prdct.id}
        data-testid="productItem"
        title="productItem"
        onClick={() => {
          handleAddProduct(prdct);
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
    <S.Container data-testid="testProduct">
      <S.Tittle>Products</S.Tittle>
      {ProductItem}
    </S.Container>
  );
};
