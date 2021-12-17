import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to right, #60ad71, #4ea3a9);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CenterContainer = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: 80vh;
    background-color: #08012a;
    border-radius: 25px;
`

export const LeftContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Image = styled.img`
    width: auto;
`

export const LeftText = styled.span`
    color: white;
    font-size: 45px;
    font-weight: bolder;
    border-bottom: 1px solid #71cd84;
    margin-top: 15px;
`

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
    outline: rgb(8,1,24) none 0px;
    cursor: pointer;
        &:hover {
            background-color: rgb(240,200,8);
        }
`

export const CenterLine = styled.div`
    border-left: 1px solid #78d98a;
    height: 60vh;
`

export const RightTextUp = styled.span`
    font-weight: 700;
    font-size: 35px;
    border-bottom: 1px solid #71cd84;
    color: white;
`

export const Input = styled.input`
    height: 35px;
    border-radius: 5px;
    width: 200px;
    margin-top: 30px;
    padding: 2px;
    border: none;
`

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
    outline: rgb(8,1,24) none 0px;
    cursor: pointer;
        &:hover {
            background-color: rgb(240,200,8);
        }
`