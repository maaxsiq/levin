import React, { createContext, useCallback, useContext, useState } from "react";

export interface ICartContext {
  products: IProduct[];
  addProduct: (product: IProduct) => void;
  lessProduct: (product: IProduct) => void;
  removeProduct: (product: IProduct) => void;
  removeAllProducts: () => void;
}

export interface IProduct {
  createAt: string;
  id: string;
  image: string;
  name: string;
  price: string;
  stock: number;
  qnt: number;
}

export interface ICartProps {
  children: React.ReactNode;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartProvider = (props: ICartProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const addProduct = useCallback(
    (product: IProduct) => {
      let res = products.map((_product) => {
        if (_product.id === product.id) _product.qnt++;
        return _product;
      });

      let notHas = !products.filter((_product) => _product.id === product.id)
        .length;

      if (notHas) return setProducts(products.concat(product));

      setProducts(res);
    },
    [setProducts, products]
  );
  
  const removeProduct = useCallback(
    (product) => {
      let notHas = products.filter((_product) => _product.id !== product.id);
      setProducts(notHas);
    },
    [setProducts, products]
  );

  const lessProduct = useCallback(
    (product: IProduct) => {
      let continued: boolean | void = true;
      let res = products.map((_product) => {
        if (_product.id === product.id) _product.qnt--;
        if (_product.qnt === 0) continued = removeProduct(_product);
        return _product;
      });

      if(continued) setProducts(res);
    },
    [setProducts, products, removeProduct]
  );

  const removeAllProducts = useCallback(() => {
    setProducts([]);
  }, [setProducts]);

  const provider = {
    products,
    addProduct,
    lessProduct,
    removeProduct,
    removeAllProducts,
  } as ICartContext;
  return (
    <CartContext.Provider value={provider}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("> useCart must be used with the CartProvider");
  }
  return context;
};
