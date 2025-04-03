import styled from "styled-components";

export const DateFormat = styled.div`
    padding: 10px 10px 0px 0px;
    text-align: center;
    font-family: monospace;
    color: ${({ theme }) => theme.color.white};
    font-size: large;
    line-height: 1;
`;

export const CurrentDate = styled.p`
    font-size: x-large;
    padding-top: 0px;  
`;