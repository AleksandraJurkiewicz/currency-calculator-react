import styled from "styled-components";

export const ResultText = styled.div`
    color: ${({ theme }) => theme.color.emerald};
    line-height: 2;
    font-size: xx-large;
    text-shadow: 3px 2px 9px ${({ theme }) => theme.color.emeraldShadow};
    border-bottom: 7px solid ${({ theme }) => theme.color.emerald};
    max-width: 500px;
    text-align: center;
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;