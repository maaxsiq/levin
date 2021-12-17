import React from "react";
import * as S from "./styles";
import image from "../../assets/logo-2x.png";
import logout from "../../assets/logout.svg";
import { useHistory } from "react-router-dom";

export const Header: React.FC = () => {
  //History to control the navigation
  let history = useHistory();

  //Functon active to set the path of navigation
  function goTo(path: string) {
    history.push(path);
  }
  
  return (
    <S.Container>
      <S.Image src={image} />
      <S.Tittle>Market</S.Tittle>
      <S.Logout src={logout} onClick={() => goTo("/")} />
    </S.Container>
  );
};
