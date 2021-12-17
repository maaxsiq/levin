import styled from "styled-components";

export const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RightTextUp = styled.span`
  font-weight: 700;
  font-size: 35px;
  border-bottom: 1px solid #71cd84;
  color: white;
`;

export const Input = styled.input`
  height: 35px;
  border-radius: 5px;
  width: 200px;
  margin-top: 30px;
  padding: 2px;
  border: none;
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
