import styled from "styled-components";

export const Title = styled.header`
    text-align: center;
    color: ${({ theme }) => theme.color.emerald};
    text-shadow: 3px 2px 9px ${({ theme }) => theme.color.emeraldShadow};
    font-size: x-large;
    box-sizing: border-box;
`;