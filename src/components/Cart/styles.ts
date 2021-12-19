import styled from "styled-components";

export const Container = styled.div`
  margin-top: 15px;
  background-color: #08012a;
  width: 30%;
  height: 95%;
  border-radius: 25px;
  overflow: scroll;
  overflow-x: hidden;
`;

export const Tittle = styled.span`
  height: 55px;
  font-size: 45px;
  color: white;
  border-bottom: 1px solid #71cd84;
  padding: 5px;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0px;
  background-color: #08012a;
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: 10px;
  align-items: flex-start;
  background-image: linear-gradient(to right, #60ad71, #4ea3a9);
  border-radius: 25px;
`;

export const CardItem = styled.div`
  height: 50px;
  width: 100%;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CardItemQnt = styled.div`
  font-size: 80%;
  height: 50px;
  width: 10%;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`;

export const ItemLogo = styled.img`
  width: 30px;
  margin-left: 5px;
`;

export const ItemName = styled.span`
  font-size: 80%;
  margin-left: 15px;
  color: white;
`;

export const ItemPrice = styled.span`
  font-size: 60%;
  margin-left: 15px;
  color: white;
`;

export const ItemStock = styled.span`
  font-size: 60%;
  margin-left: 15px;
  color: white;
`;

export const InsideCard = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export const InsideCardDown = styled.div`
  display: flex;
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonInside = styled.button`
  height: 20px;
  margin: 0px 1px;
  width: 20px;
  border: none;
  border-radius: 10px;
  background-color: #78d98a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: black;
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    background-color: rgb(240, 200, 8);
  }
`;

export const ButtonInsideX = styled.button`
  height: 20px;
  margin: 0px 5px 0px 1px;
  width: 20px;
  border: none;
  border-radius: 10px;
  background-color: #78d98a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: black;
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    background-color: #8B0000;
  }
`;

export const ButtonsList = styled.div`
  display: flex;
`;

export const ButtonImage = styled.img`
  width: 8px;
`;

export const ButtonsContainer = styled.div`
  border-top: 1px solid #71cd84;
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin-bottom: 10px;
  position: sticky;
  top: 0px;
  background-color: #08012a;
`;

