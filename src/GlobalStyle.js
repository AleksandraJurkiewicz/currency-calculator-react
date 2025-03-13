import { createGlobalStyle } from "styled-components";
import background from "./assets/background.jpg"
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    html {
        box-sizing: border-box;
        background-image: url("${background}");
        background-size: cover;
    }

    *,
    ::after, ::before {
        box-sizing: inherit;
    }

    #root {
        font-family: 'Arimo', sans-serif;
        max-width: 900px;
        min-width: 200px;
        background-color: ${({ theme }) => theme.color.black};
        margin: 0 auto;    
        box-sizing: border-box;
        margin-top: 100px;
        border: 2px solid ${({ theme }) => theme.color.black};
    }
`;