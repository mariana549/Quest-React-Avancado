import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
   *{
      margin: 0 auto;
      padding: 0;
      border:none;
      list-style: none;
      text-decoration: none;
      font-family: "Roboto", sans-serif;
      box-sizing: border-box;
   }

   body{
      background-color: #060321;
   }
`

export { GlobalStyle }

// #ced5e4