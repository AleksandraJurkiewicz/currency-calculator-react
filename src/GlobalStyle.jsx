import { createGlobalStyle } from "styled-components";
import background from "./assets/background.jpg"

export const GlobalStyle = createGlobalStyle`
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
        background-color: rgba(0, 0, 0, 0.816);
        margin: 0 auto;    
        box-sizing: border-box;
        margin-top: 100px;
        border: 2px solid rgba(0, 0, 0, 0.674);
    }
`;