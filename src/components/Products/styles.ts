import styled from "styled-components";

export const Container = styled.div`
  margin-top: 15px;
  background-color: #08012a;
  width: 65%;
  height: 95%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
`;

export const ContainerLine = styled.div`
  margin-top: 15px;
  background-color: #08012a;
  width: 100%;
  border-radius: 25px;
  display: flex;
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

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 98.5%;
  margin: 10px;
  align-items: flex-start;
  background-image: linear-gradient(to right, #60ad71, #4ea3a9);
  border-radius: 25px;
  cursor: pointer;
`;

export const CardItem = styled.div`
  height: 75px;
  width: 100%;
  border-radius: 25px;
  border: 1px solid #71cd84;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ItemLogo = styled.img`
  width: 50px;
  margin-left: 30px;
`;

export const ItemName = styled.span`
  font-size: 30px;
  margin-left: 30px;
  color: white;
`;

export const ItemPrice = styled.span`
  font-size: 15px;
  margin-left: 31px;
  color: white;
`;

export const ItemStock = styled.span`
  font-size: 15px;
  margin-left: 31px;
  color: white;
`;

export const InsideCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InsideCardDown = styled.div`
  display: flex;
`;
