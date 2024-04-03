import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
   *{
      margin: 0 auto;
      padding: 0;
      border:none;
      list-style: none;
      text-decoration: none;
   }
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
      background-color: lightgrey;
      width: 125px;
   }
   .container {
      display: flex;
      flex-direction: column;
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
   }
`

export { GlobalStyle }