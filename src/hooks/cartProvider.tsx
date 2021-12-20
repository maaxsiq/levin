import React, { createContext, useCallback, useContext, useState } from "react";

//Interface for actions context
export interface ICartContext {
  products: IProduct[];
  addProduct: (product: IProduct) => void;
  lessProduct: (product: IProduct) => void;
  removeProduct: (product: IProduct) => void;
  removeAllProducts: () => void;
}

//Interface for object
export interface IProduct {
  createAt: string;
  id: string;
  image: string;
  name: string;
  price: string;
  stock: number;
  qnt: number;
}

//Interface for object props
export interface ICartProps {
  children: React.ReactNode;
}

//Setting the context actions
const CartContext = createContext<ICartContext | undefined>(undefined);

//Handle full provider
export const CartProvider = (props: ICartProps) => {

  //Define the type and state of object provider
  const [products, setProducts] = useState<IProduct[]>([]);

  //Handle for add product on provider
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
  
  //Handle for remove completely product an provider
  const removeProduct = useCallback(
    (product) => {
      let notHas = products.filter((_product) => _product.id !== product.id);
      setProducts(notHas);
    },
    [setProducts, products]
  );

  //Handle for remove an product of provider
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

  //Handle for clear the list of products provider
  const removeAllProducts = useCallback(() => {
    setProducts([]);
  }, [setProducts]);

  //Setting the export values of provider
  const provider = {
    products,
    addProduct,
    lessProduct,
    removeProduct,
    removeAllProducts,
  } as ICartContext;

  //Return the context
  return (
    <CartContext.Provider value={provider}>
      {props.children}
    </CartContext.Provider>
  );
};

//Handle the throw chance and check the context use
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("> useCart must be used with the CartProvider");
  }
  return context;
};
