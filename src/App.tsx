import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import GlobalStyle from './styles';
import { CartProvider } from "./hooks/cartProvider";

const App: React.FC = () => {
  return (
    <CartProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
