import styled from "styled-components";

export const ExchangeRate = styled.div`
    text-align: center;
    line-height: 2;
    color: #f5f5eb;
    padding: 0px 10px 10px 10px;
    font-size: medium;
`;

export const Button = styled.button`
    background-color: rgb(30, 169, 103);
    color: #f5f5eb;
    font-size: larger;
    border-color: rgb(30, 169, 103);

    &:hover {
        background-color: rgb(9, 157, 85);
        border: 5px solid rgb(7, 116, 64);
    }
`;

export const ButtonWrapper = styled.div`
    padding : 0px 20px 20px 20px;
`;

export const Amount = styled.input`
    border-radius: 3px;
    max-width: 100px;
    text-align: center;
    padding: 5px;
    margin-left: 10px;
`;

export const AmountWrapper = styled.div`
    padding: 20px;
`;

export const Converter = styled.form`
    box-sizing: border-box;
    border: 7px solid 7, 159, 86;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    line-height: 2.5;
    font-size: large;
    color: #f5f5eb;
`;

export const Currency = styled.select`
    margin-left: 10px;
    padding: 5px;
`;