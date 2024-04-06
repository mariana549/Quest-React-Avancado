// import { useContext } from "react"
import styled from "styled-components";

// const { theme } = useContext(ThemeContext)

export const Button = (props) => {

   return (
      <Botao {...props} />
   )
}

const Botao = styled.button`
   padding: 10px;
   font-weight: bold;
   border-radius: 5px;
   background-color: #fffbf2;
   border: solid 1px black;
   margin-top: 50px;
`

// const Botao = styled.button`
//    color: theme.color;
//    background: theme.background;
// ` 