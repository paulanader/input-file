import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        background-color: #7159c1;
        text-rendering: optimizeLegibility;
        -webkit-fint-smoothing: antialiased;
    }

    html, body, #root {
        height: 100%;
    }
    
`;
