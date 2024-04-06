import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

   *{
      margin: 0 auto;
      padding: 0;
      border:none;
      list-style: none;
      text-decoration: none;
      font-family: "Roboto", sans-serif;
   }

   body{
      background-color: #263F79;
   }

   .container {
      max-width: 1280px;
   }
   
   .box {
      padding: 2rem;
   }
`

export { GlobalStyle }