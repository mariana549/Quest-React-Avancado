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
   h2 {
      color: #141313;
      text-transform: capitalize;
      font-size: 20px;
      font-weight: 700;
   }

   img{
      /* border: solid 1px black; */
      border-radius: 5px;
      /* background-color: lightgrey; */
      width: 120px;
   }

   .container {
      padding: 2rem;
      max-width: 1280px;
   }
`

export { GlobalStyle }