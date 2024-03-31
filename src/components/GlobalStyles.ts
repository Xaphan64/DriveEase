import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: Poppins,sans-serif;

    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: #f2613f transparent;

    /* Chrome, Edge & Safari */
    ::-webkit-scrollbar-track {
    background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 3px solid #f2613f;
    }  
}

body {
    color: #ffffff;
    background-color: #0C0C0C;


    //color for buttons: F2613F
}

`;

export default GlobalStyles;
