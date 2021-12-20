import React from "react";
import * as S from "./styles";
import { useHistory } from "react-router-dom";

export const FormLogin: React.FC = () => {
  //History to control the navigation
  let history = useHistory();

  //Handler of input for user
  function handleUserChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setUser(event.target.value);
  }

  //Handler of input for password
  function handlePassChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setPass(event.target.value);
  }

  //Handler of login (check if user exists)
  function login() {
    if (user === "test@liven.com" && pass === "1234") {
      history.push("/home");
    } else {
      alert("Check your credentials");
    }
  }

  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <S.RightContainer data-testid="testLogin">
      <S.RightTextUp>Welcome!</S.RightTextUp>
      <S.Input placeholder="User" type="text" title="userId" onChange={handleUserChange} />
      <S.Input
        placeholder="Password"
        type="password"
        title="passId"
        onChange={handlePassChange}
      />
      <S.ButtonRight onClick={() => login()}>Login</S.ButtonRight>
    </S.RightContainer>
  );
};
