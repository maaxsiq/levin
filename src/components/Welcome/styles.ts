import styled from "styled-components";

export const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: auto;
`;

export const LeftText = styled.span`
  color: white;
  font-size: 45px;
  font-weight: bolder;
  border-bottom: 1px solid #71cd84;
  margin-top: 15px;
`;

export const Button = styled.button`
  margin-top: 40px;
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
