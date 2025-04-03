import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.emerald};
    color: #f5f5eb;
    font-size: larger;
    border-color: ${({ theme }) => theme.color.emerald};

    &:hover {
        background-color: ${({ theme }) => theme.color.salem};
        border: 5px solid ${({ theme }) => theme.color.malahite};
    }
`;

export const ButtonWrapper = styled.div`
    padding : 0px 20px 0px 20px;
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
    color: ${({ theme }) => theme.color.springWood};
`;

export const Currency = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.salem};
`;

export const Failure = styled.p`
    color: ${({ theme }) => theme.color.red};
`;