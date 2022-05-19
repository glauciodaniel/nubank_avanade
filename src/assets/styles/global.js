import { createGlobalStyle } from "styled-components";

// Em projetos React ou NextJS ou React Native
// Existem várias formas de usarmos estilos CSS.
// import file.css e chamar com className
// Register.module.css comum para NextJS - CSS Module
// Sass - é um pré-processador CSS. .sass ou .scss compila um css final
// Styled Components

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Roboto','Lato','Open Sans', sans-serif;
    }

    html, body{
        margin:0;
        padding: 0;
        outline:0;
    }

    input[type='text'],
    input[type='tel'],
    input[type='email']{
        border: none;
        width:100%;
        max-width: 500px;
        border-bottom: 1px solid #333;
        outline: 0;
        padding-bottom: 5px;
        margin-bottom: 10px;
        &:focus {
            border-color: green;
            caret-color: green;
            color: green;
        }
    }
`;
