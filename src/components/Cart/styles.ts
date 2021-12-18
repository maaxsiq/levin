import styled from "styled-components";

export const Container = styled.div`
  margin-top: 15px;
  background-color: #08012a;
  width: 20%;
  height: 95%;
  border-radius: 25px;
`;

export const Tittle = styled.span`
  height: 55px;
  font-size: 45px;
  color: white;
  border-bottom: 1px solid #71cd84;
  padding: 5px;
  display: flex;
  justify-content: center;
`;

export const ButtonLeft = styled.button`
  margin-top: 30px;
  height: 35px;
  width: 150px;
  border: none;
  border-radius: 10px;
  background-color: #78d98a;
  font-size: 15px;
  color: black;
  font-weight: bolder;
  outline: rgb(8, 1, 24) none 0px;
  cursor: pointer;
  &:hover {
    background-color: #8B0000;
  }
`;

export const ButtonRight = styled.button`
  margin-top: 30px;
  height: 35px;
  width: 150px;
  border: none;
  border-radius: 10px;
  background-color: #78d98a;
  font-size: 15px;
  color: black;
  font-weight: bolder;
  outline: rgb(8, 1, 24) none 0px;
  cursor: pointer;
  &:hover {
    background-color: rgb(240, 200, 8);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;