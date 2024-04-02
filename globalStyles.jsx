import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
   button{
      padding: 10px;
      font-weight: bold;
      border-radius: 5px;
      background-color: #fffbf2;
      border: solid 1px black;
      margin-bottom: 50px;
   }
   h1{
      font: 50px;
      text-align: center;
      padding: 30px;
   }
   h2 {
      color: #141313;
      text-transform: capitalize;
      font-size: 20px;
   }
   img{
      border: solid 1px black;
      border-radius: 5px;
      padding: 10px;
      background-color: lightgrey;
   }
`

export { GlobalStyle }