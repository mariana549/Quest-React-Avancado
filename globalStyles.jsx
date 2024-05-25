import { createGlobalStyle } from "styled-components"
import rows from "./src/assets/image/rows.png"

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
      background-image: url(${rows});
      background-repeat: no-repeat;
      background-size: cover;
      background-color: #ced5e4;
   }
`

export { GlobalStyle }