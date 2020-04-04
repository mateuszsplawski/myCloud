import { createGlobalStyle } from "styled-components";

const GlobalStyle: Function = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700&display=swap&subset=latin-ext');
@import url("https://fonts.googleapis.com/css?family=Exo:800&display=swap");

*{
    margin:0;
    padding:0;
    font-family: 'Roboto', sans-serif;
    box-sizing:border-box;
}

body{
    overflow-x: hidden;
    background: linear-gradient(to top, #141e30, #243b55);

}`;

export default GlobalStyle;
